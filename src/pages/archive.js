import React from 'react';
import { Link } from 'react-router-dom'

function Archive(){

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

    return(
        <div>
            <nav style={styles.nav}>
                <Link to="/" style={{textDecoration:'none', color:'white'}}><h1>Home</h1></Link>
                <Link to="/archive" style={{textDecoration:'none', color:'white'}}><h1>Archive</h1></Link>
            </nav>
            <div>
                <h1 style={{ color:'gray'}}>Archive</h1>
                <hr style={{ width:'50%', marginLeft:'25%', marginRight:'25%'}}></hr>
                {posts.map(post =>
                    <article>
                        <h1>{post.title}</h1>
                        <p style={{ textAlign:'center'}}>by Cody Dalton</p>
                        <p style={styles.words}>{post.description}</p>
                        <p style={styles.words}>Aliquam vel velit at massa imperdiet egestas. Nullam at est fermentum, convallis est sit amet, fringilla felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam eget tellus at libero elementum faucibus. Duis at malesuada dui. Integer at turpis non ligula pellentesque porta. Aenean aliquet ultricies tortor. Suspendisse quis metus varius, cursus metus convallis, pellentesque lectus. In interdum eros eu semper sagittis. Sed augue tortor, finibus eget turpis quis, bibendum tempus arcu. Quisque laoreet sem in urna porta, non vulputate purus ullamcorper. Morbi commodo lacus sit amet nisi ultrices, nec accumsan arcu ornare. Vestibulum dignissim tempus neque nec auctor. In eget magna leo. Vivamus tristique augue id mattis eleifend.
                        <br></br>
                        <br></br>
                        Aenean faucibus, velit sit amet rutrum semper, nisl felis vestibulum nunc, eget aliquet lacus leo et tellus. Integer sed aliquam mi. Suspendisse purus nisi, convallis nec pellentesque non, dignissim in orci. Vivamus at tempus turpis. Curabitur efficitur, turpis non tincidunt venenatis, urna urna mollis lacus, vel laoreet diam diam eget tortor. Aenean pharetra, tellus a suscipit accumsan, nunc elit porta elit, condimentum interdum urna nunc vel risus. Suspendisse augue ligula, venenatis et urna vel, efficitur pretium arcu. Sed id dignissim arcu. Quisque interdum, enim in dignissim fermentum, urna nisl molestie neque, ac dapibus nisi ante sollicitudin sem. Vestibulum tempus accumsan nisl, non varius mi faucibus id. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam eu congue sem. Integer pulvinar est a turpis consectetur mollis at non eros. Vestibulum purus mauris, laoreet non dolor a, auctor imperdiet quam. Nulla sodales dapibus nunc, ornare interdum urna euismod ut. Aenean a magna non ante ornare luctus nec condimentum libero.
                        <br></br>
                        <br></br>
                        Curabitur vel est et neque semper lacinia. Nunc congue dui at velit tempus, in pretium nisl blandit. Cras dapibus pellentesque arcu sed tempus. Quisque aliquet.</p>
                        <br></br>
                        <p style={{ textAlign:'center'}}>Posted on 00/00/2023 at 00:00:00 </p>
                        <br></br>
                        <hr style={{ width:'50%', marginLeft:'25%', marginRight:'25%'}}></hr>
                    </article>
                
                )}
            </div>
        </div>

    );
}
export default Archive

const styles ={
    nav:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        backgroundImage:'linear-gradient(black, white)',
    },
    words:{
        textAlign:'left',
        marginLeft:'25%',
        marginRight:'25%'
    }
}