import React, { useContext } from "react";
import { levelContext } from "../contextApi/Level";
const Form = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "34c8ac1d-4c64-44fb-b8aa-dbe603b279ec");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: json
        }).then((res) => res.json());

        if (res.success) {
        console.log("Success", res);
        location.reload();
        }

    };
    const { level } = useContext(levelContext);

    return (
        <form className="mt-4 flex flex-col items-center gap-3" onSubmit={onSubmit}>
            <textarea className="w-full outline-none border p-3 rounded-lg" placeholder="Channel your concerns..." rows={10} name="Concern"></textarea>
            <input name="Level" className="hidden" type="text" value={level === 'one' ? 'Year 1' : level === 'two' ? 'Year 2' : 'Year 3'}/>
            <button className='bg-[#00adea] text-white py-2 px-3 my-1 w-[50%] rounded-lg text-center hover:opacity-85 active:opacity-75' type="submit">Send</button>
        </form>
    );
}

export default Form;