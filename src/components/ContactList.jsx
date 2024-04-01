import React,{useEffect, useState} from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";//store에서 읽어오기

const ContactList = ()=>{
    const {contactList, filterName} = useSelector((state)=>state);
    let [filteredList, setFilteredList] = useState([]);
    
    useEffect(()=>{
        if(filterName !==""){
            const result = contactList.filter((item)=>item.name.includes(filterName));
            setFilteredList(result);
        }else{
            setFilteredList(contactList);
        }
    },[filterName, contactList])

    return(
    <div>
        저장된 번호:{filteredList.length}
        <SearchBox/>
        <div className="contact-list">
            {filteredList.map((item, key)=><ContactItem key={key} item={item}/>)}
        </div>
        
    </div>
    )
}
export default ContactList;