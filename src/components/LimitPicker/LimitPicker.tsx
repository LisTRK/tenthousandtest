import css from "./LimitPicker.module.css"
interface LimitPickerProps {
  limit: number;
  onChange: (newLimit: number) => void;
}

const LimitPicker = ({ limit, onChange }: LimitPickerProps)=>{
    return <div className={css.container}>
        <label htmlFor="limit">Products on the page:</label>
        <select 
        name="limit" 
        id="limit"
        onChange={(e) => onChange(Number(e.target.value))}
        >
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={50}>50</option>
        </select>
    </div>
}

export default LimitPicker;