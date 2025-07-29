import { useRouteError } from 'react-router-dom'
import PageContent from '../components/PageContent'

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <PageContent title={error.status}>
            {error.message}
        </PageContent>
    )
}

export default ErrorPage