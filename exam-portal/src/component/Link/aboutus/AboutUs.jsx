import './about.css'

const AboutUs = ()=>{

    return(
        <div className='container'>
            <h1  className="div1">Enhance Yourself With Us</h1>
            <img className='img' src="https://justcreative.com/wp-content/uploads/2021/02/interface-3614766_1280.jpg.webp"></img>
            <h2 className='h2'>What We Do?</h2>
            <p className='p'>
            During this pandemic, the school learning is done online. Teaching through online learning is challenging for some teachers. Teachers have to prepare a variety of methods and techniques to teach a subject that is effective during e-learning. The use of slideshow, videos, pictures, games, and online generator to create quizzes are things that teachers can use to support the teaching.</p>
            
            <p className='p'>Giving online quizzes is one of the techniques that teachers can use in class. This activity helps the teachers and the students as well, to know what and how much they have understood about a subject. However teachers must be mindful to choose the appropriate types of quizzes for the students.</p>
             
            <p className='p'>The quizzes are not only to know the students' comprehension toward the topic but also to make them enjoy completing the quizzes. During e-learning, teachers can try to use websites that provide ideas and templates which can help them create quizzes. Our Online Quiz is web-based website that teachers can use to create fun online quizzes.</p>
            
            <p className='p'>In conclusion, interactive online quizzes not only help teachers with teaching techniques during e-learning but also have a beneficial impact on students. Increasing students' involvement, motivation, better score and stress reduction are several benefits that students get through fun online quizzes.</p>

            <div className='row'>
                <div className='col'> 
                    <h2 style={{marginLeft:'110px'}}>Our Mission</h2>
            
                    <p style={{fontSize:'20px',marginLeft:'125px'}}>With every cup,</p>
                    <p style={{fontSize:'22px',marginLeft:'80px'}}>with every conversation,</p>
                    <p style={{fontSize:'24px',marginLeft:'80px'}}>with every community-</p>
                    <p style={{fontSize:'28px',marginLeft:'5px'}}>We nurture the limitless possibilities</p>
                    <p style={{fontSize:'28px',marginLeft:'75px'}}>of student great future.</p>
                </div>
                <div className='col'>
                <img src='https://learningwithangie.com/wp-content/uploads/2023/05/study-motivation-quotes-student.png' style={{width:'500px',height:'300px', marginBottom:'10px'}}></img>
                </div>
            </div> 
            
            
            
            
        </div>
    )
}
export default AboutUs;