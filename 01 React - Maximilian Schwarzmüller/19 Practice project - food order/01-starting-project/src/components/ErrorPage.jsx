const ErrorPage = ({ error, ...props }) => {
    return (
        <div className="error">
            <h2>An Error Occured...</h2>
            <p>{error}</p>
            <div className="modal-actions">
                <button className="button" {...props}>Close</button>
            </div>
        </div>
    )
}
export default ErrorPage