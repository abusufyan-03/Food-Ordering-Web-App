import { useRouteError } from "react-router"
const Error = () => {
    const error = useRouteError();
    console.log(error)
    return(
        <>
        <h1>OOPS!</h1>
        <h2> Something Went Wrong!!</h2>
        <p>{error.status} {error.statusText}</p>
        </>
    )
}

export default Error;