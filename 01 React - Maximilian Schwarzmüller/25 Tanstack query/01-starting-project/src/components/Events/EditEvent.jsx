import { Link, useNavigate, useParams, redirect, useSubmit, useNavigation } from 'react-router-dom';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { useMutation, useQuery } from '@tanstack/react-query';
import { fetchEvent, queryClient, updateEvent } from '../util/http.js';
// import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function EditEvent() {
  const navigate = useNavigate();
  const { id } = useParams()
  const submit = useSubmit()
  const { state } = useNavigation()

  const { data, isError, error, isPending } = useQuery({
    queryKey: ['events', id],
    queryFn: ({ signal }) => fetchEvent({ signal, id }),
    staleTime: 10000
  })


  // const { mutate } = useMutation({
  //   mutationFn: updateEvent,
  //   onMutate: async (data) => {

  //     const newEvent = data.event

  //     await queryClient.cancelQueries({ queryKey: ['events', id] })
  //     const previousEvent = queryClient.getQueryData(['events', id])

  //     queryClient.setQueryData(['events', id], newEvent)
  //     return { previousEvent }
  //   },
  //   onError: (error, data, context) => {
  //     queryClient.setQueryData(['events', id], context.previousEvent)
  //   },
  //   onSettled: () => {
  //     queryClient.invalidateQueries(['events', id])
  //   }
  // })

  function handleSubmit(formData) {
    // mutate({ id, event: formData })
    // navigate('../');
    submit(formData, { method: 'PUT' })
  }

  function handleClose() {
    navigate('../');
  }


  let content;
  // if (isPending) {
  //   content = (<div className='center'>
  //     <LoadingIndicator />
  //   </div>)
  // }

  if (isError) {
    content = (
      <>
        <ErrorBlock title={`Failed to load event`}
          message={error?.info.message || 'Failed to load event. Please check your inputs and try egain later'}
        />
        <div className='form-actions'>
          <Link to='../' className='button'>
            Okay
          </Link>
        </div>
      </>
    )
  }

  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        {state === 'submitting' ? (
          <p>Sending data...</p>
        ) : (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Update
            </button>
          </>)}
      </EventForm>
    )
  }

  return (
    <Modal onClose={handleClose}>
      {content}
    </Modal>
  );
}


export const loader = ({ params }) => {
  queryClient.fetchQuery({
    queryKey: ['events', params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id })
  })
}

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const updatedEvent = Object.fromEntries(formData);
  await updateEvent({ id: params.id, event: updatedEvent })
  await queryClient.invalidateQueries(['events'])
  return redirect('../')
}