export function InputBox({label, placeholder, onChange}){
    return <>
        <div className="ml-4 mt-3">
            <div className="text-lg font-semibold">
                {label}
            </div>
            <input onChange= {onChange} placeholder={placeholder} className="w-11/12 px-2 mt-2 py-1 border rounded border-slate-600"/>
        </div>
    </>
}