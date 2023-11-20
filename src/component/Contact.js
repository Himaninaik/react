import "../css/Contact.css";
function Contact(){
    return(
        <>
        <br/><br/>
        <h1><u>contact me</u></h1>
        <br/>
        <div className="form">
        <form>
            <table align="center">
            <tr>
                <td><input type="text" placeholder="Enter your Name"/></td>
                </tr>
                <br></br>
                <tr>
                <td><input type="text" placeholder="Enter your email"/></td>
                </tr>
                <br></br>
                <tr>
                <td><textarea name="text" row="5" cols="25" placeholder="Enter your message"/></td>
                </tr>
                <br></br>
                <div className="but">
                <tr>
                    <button>Send Message</button>
                </tr>
                </div>
                </table>

       </form>
</div>
        </>
    );
}
export default Contact;