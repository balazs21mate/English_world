import React from "react";
import PagesTitle from '../PagesTitle';
import Form from "./Form";

function CreateCard() {
    return (
        <div className="flex flex-col mx-auto w-[80%] lg:w-[60%]">
            <PagesTitle title='Create'/>
            <Form/>
        </div>
    );
}

export default CreateCard;