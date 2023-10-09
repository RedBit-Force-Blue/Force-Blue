import React ,{useState, useEffect}from "react";
import {Select, SelectItem} from "@nextui-org/react";
import axios from "axios";

export const ListSelect = ({tags}) => {
    const [listTags, setlistTags] = useState([{}])
    const [values, setValues] = useState([])

    const getTags =async ()=>{
        let response = await axios.get(`http://localhost:3022/tag/getTags`)
        setlistTags(response.data.tags)
    
    }

    useEffect(()=>{
        getTags();
    },[values])

    const handleSelected = (event)=>{
        console.log('abierto')
        console.log(event)
        // setValues(...event.target.value.split(","));
        // console.log(event)
        // console.log('ejecutado')
        // let key = event.value
        // setValues(key)
        // console.log(key)
        // // tags(id)
    }

    const handleSelectionChange = (e) => {
        console.log(e)
        setValues(new Set(e.target.split(",")));
      };

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
    <Select
      label="Favorite Animal"
      placeholder="Select an animal"
      onSelectionChange={(e)=>{handleSelected(e)}}
      className="max-w-xs"
    //   onChange={handleSelectionChange}
    //   selectedKeys={values}
      selectionMode="multiple"
    >

      {
          listTags.map(({_id, name}, index)=>{
        return(

            <SelectItem key={index} value={_id} textValue={name} >
                {name}
            </SelectItem>
        )
    })
}
    </Select>
    <p className="text-small text-default-500">Selected: {Array.from(values).join(", ")}</p>
          </div>
  );
}