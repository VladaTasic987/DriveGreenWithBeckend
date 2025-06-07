import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([
    {id: 1, name: "Vladimir Tasic", email: "vlada@gmail.com", password: "12345678"},
    {id: 2, name: "Aleksandra Mircic", email: "aleksandra@gmail.com", password: "11223344"}
  ]);



  const [namePartner, setNamePartner] = useState("");
  const [emailPartner, setEmailPartner] = useState("");
  const [passwordPartner, setPasswordPartner] = useState("");
  const [geoLocation, setGeoLocation] = useState("");
  const [selectedOptions, setSelectedOptions] = useState({Punjaci: '1 punjac', Kw: '11', Naplata: 'Besplatno'});
  const [partners, setPartners] = useState([]);


  function toggleVisible() {
    setVisible(Toggle => !Toggle);
  }

  function getEmail(e) {
    setEmail("");
    setEmail(e.target.value)
  }

  function getPassword(e) {
    setPassword(e.target.value)
  }

  function getName(e) {
    setName(e.target.value)
  }

  const existingEmail = users.some((user) => {
    return email === user.email
  })

  const existingPassword = (email, password) => {
    const user = users.find((user)=> user.email === email)
    if(user && user.password === password) {
    return true
    }     
    else return false
}
      
  function registerUser() {
    setUsers([...users, {id: Date.now(), name: name, email: email, password: password}])
  }
  function clearInputs() {
    setEmail("");
    setName("");
    setPassword("");
  }

  //Deo logike za Partnera

  function registerPartner() {
    setPartners([...partners, {id: Date.now(), name: namePartner, email: emailPartner, password: passwordPartner,
      geoLocation: geoLocation, selectedOptions: selectedOptions}])
  }

  function getEmailPartner(e) {
    setEmailPartner("");
    setEmailPartner(e.target.value)
  }

  function getPasswordPartner(e) {
    setPasswordPartner(e.target.value)
  }

  function getNamePartner(e) {
    setNamePartner(e.target.value)
  }
  function getGeoLocation(e) {
    setGeoLocation(e.target.value)
  }
  function clearInputsPartner() {
    setEmailPartner("");
    setNamePartner("");
    setPasswordPartner("");
    setGeoLocation("");
  }




  return (
    <UserContext.Provider value={{ visible, toggleVisible, email, password, getEmail, getPassword, existingEmail, existingPassword, name, getName, registerUser, clearInputs,
      getGeoLocation, geoLocation, selectedOptions, setSelectedOptions, partners, registerPartner, namePartner, getNamePartner, emailPartner, getEmailPartner,
      passwordPartner, getPasswordPartner, clearInputsPartner}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

