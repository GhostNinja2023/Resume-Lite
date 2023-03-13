


const Section = (props) =>{

     //  {heading: "Skills" , description: "I am a full stack developer"}

       return(
            <div className="section">
                 <h1>{props.heading}</h1>
                 <p> {props.description} </p>
                 <hr />
                 {props.children}

            </div>
       )

}

export default Section;