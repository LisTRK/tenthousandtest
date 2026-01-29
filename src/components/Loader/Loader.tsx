import css from "./Loader.module.css";
import { FadeLoader } from "react-spinners";

interface LoaderType{
    loading: boolean
}

const Loader = ({loading}: LoaderType ) => {
    return <div className={css.loader}>
        <FadeLoader loading={loading}/>
    </div>
}

export default Loader;