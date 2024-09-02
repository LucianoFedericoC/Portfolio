const handleSection = (e: any, section:any) =>{
    e.preventDefault()
    window.scrollTo({
        top:  section.current.offsetTop -  0,
        behavior: "smooth"
    })
}


export default handleSection;