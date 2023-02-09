import React from "react"
import { Link } from "react-router-dom"

function Home(){

    const posts = [
        {
            title:'Javascript Origins',
            description:'Brendan Eich was chiefly responsible for the invention of Javascript. Many might wonder why a language not associated with Java would share such a similar name. Mr. Eich thought that the name Mocha may have been more suitable, but the orders from on-high was to call it what we know it as today.'
        },
        {
            title:'Web Architecture',
            description:'There are many ways in which all the components of a website or application may come together to serve the end client. In Web Architecture, I have been learning some of these many ways - including client-side, server-side, person to person, and more.'
        },
        {
            title:'Github Student Pack',
            description:'Did you know that if you are a college student, you can sign up for Github Pro for free so long as you are enrolled? It is not too complex a process and it provides many great tools that you would not be able to have access to otherwise for such a low(free) cost!'
        }
    ]

    const handleClick = (e) =>{
        document.getElementById('title').innerText = posts[e.target.id].title
        document.getElementById('content').innerText = posts[e.target.id].description
    }

    const handleRevert = () =>{
        document.getElementById('title').innerText = "Welcome to Cody's Blog!"
        document.getElementById('content').innerText = "To see a recent post, just click on its name in the sidebar on your right. Otherwise, check out the archive for all my past posts!"
    }


    return(
        <div>
            <nav style={styles.nav}>
                <Link to="/" style={{ textDecoration:'none', color:'white' }} onClick={handleRevert}><h1>Home</h1></Link>
                <Link to="/archive" style={{ textDecoration:'none', color:'white' }} ><h1>Archive</h1></Link>
            </nav>
            <div style={styles.container}>
                <div id='greeting' style={styles.greeting}>
                        
                </div>
                <div style={styles.content}>
                        <h2 id='title'>Welcome to Cody's Blog!</h2>
                        <p id='content' style={styles.words}>To see a recent post, just click on its name in the sidebar on your right. Otherwise, check out the archive for all my past posts!</p>
                        <p style={styles.words}>Aliquam vel velit at massa imperdiet egestas. Nullam at est fermentum, convallis est sit amet, fringilla felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam eget tellus at libero elementum faucibus. Duis at malesuada dui. Integer at turpis non ligula pellentesque porta. Aenean aliquet ultricies tortor. Suspendisse quis metus varius, cursus metus convallis, pellentesque lectus. In interdum eros eu semper sagittis. Sed augue tortor, finibus eget turpis quis, bibendum tempus arcu. Quisque laoreet sem in urna porta, non vulputate purus ullamcorper. Morbi commodo lacus sit amet nisi ultrices, nec accumsan arcu ornare. Vestibulum dignissim tempus neque nec auctor. In eget magna leo. Vivamus tristique augue id mattis eleifend.
                        <br></br>
                        <br></br>
                        Aenean faucibus, velit sit amet rutrum semper, nisl felis vestibulum nunc, eget aliquet lacus leo et tellus. Integer sed aliquam mi. Suspendisse purus nisi, convallis nec pellentesque non, dignissim in orci. Vivamus at tempus turpis. Curabitur efficitur, turpis non tincidunt venenatis, urna urna mollis lacus, vel laoreet diam diam eget tortor. Aenean pharetra, tellus a suscipit accumsan, nunc elit porta elit, condimentum interdum urna nunc vel risus. Suspendisse augue ligula, venenatis et urna vel, efficitur pretium arcu. Sed id dignissim arcu. Quisque interdum, enim in dignissim fermentum, urna nisl molestie neque, ac dapibus nisi ante sollicitudin sem. Vestibulum tempus accumsan nisl, non varius mi faucibus id. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam eu congue sem. Integer pulvinar est a turpis consectetur mollis at non eros. Vestibulum purus mauris, laoreet non dolor a, auctor imperdiet quam. Nulla sodales dapibus nunc, ornare interdum urna euismod ut. Aenean a magna non ante ornare luctus nec condimentum libero.
                        <br></br>
                        <br></br>
                        Curabitur vel est et neque semper lacinia. Nunc congue dui at velit tempus, in pretium nisl blandit. Cras dapibus pellentesque arcu sed tempus. Quisque aliquet.</p>
                </div>
                <div style={styles.archiveSec}>
                    <h1 style={{ color:'black'}}>Previously Posted</h1>
                    <div style={styles.archiveLinks}>
                        <h2 id='0' style={{ cursor:'pointer' }} onClick={handleClick}>Javascript Origins</h2>
                        <h2 id='1' style={{ cursor:'pointer' }} onClick={handleClick}>Web Architecture</h2>
                        <h2 id='2' style={{ cursor:'pointer' }} onClick={handleClick}>Github Student Pack</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home

const styles ={
    nav:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        backgroundImage:'linear-gradient(black, white)',
    },
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    content:{
        width:'50%',
    },
    archiveSec:{
        width:'25%',
        
        height:'25%',
        marginBottom:'-2%',
    },
    archiveLinks:{
        height:'45%',
        marginTop:'5%',
        color:'gray',
        borderRadius:'20px'
    },
    words:{
        textAlign:'left',
        fontSize:20
    },
   

}