import { redirect } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export const action = async ({ request, params }) => {

  const form = await request.formData();
  const formData = Object.fromEntries(form)

  console.log('formData:', formData)

  const query = new URL(request.url).searchParams;
  const queryData = Object.fromEntries(query.entries())

  console.log('queryData:', queryData)

  const response = await fetch(`http://localhost:8080/${queryData.mode}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })

  if (response.status === 422 || response.status === 401) {
    console.log('422 or 401 status reached')
    return response
  }

  if (!response.ok) {
    console.log('Response not Ok status reached')
    throw new Response({ message: 'Could not authenticate user' }, { status: 500 })
  }

  const resData = await response.json();
  const token = resData.token;

  localStorage.setItem('token', token);

  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem('expiration', expiration.toISOString());


  console.log('About to')
  return redirect('/')
}