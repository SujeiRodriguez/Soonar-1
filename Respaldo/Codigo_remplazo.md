/////CSS


.baseLogo {
margin-top: 1em;
margin-left: 1em;
position: absolute;
}

#mediaLuna {
margin-top: 0.25em;
margin-left: -1.5em;
opacity: 50%;
}

#logoSoonar {
margin-top: 4.5em;
margin-left: 6em;
opacity: 80%;
position: absolute;
animation: glow 2s linear infinite;

}


.logo {
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
margin: 0;
padding: 0;
width: 16em;
height: 16em;
border-radius: 50%;
background-size: cover;
box-shadow: inset 0 0 5em rgba(0, 225, 255, 0.555);
overflow: hidden;
}

.logo:before
{
content: '';
position: absolute;
top: 75%;
left: 46%;
width: .5em;
height: .5em;
background: #00a2ff;
border-radius: 50%;
filter: blur(2px);
animation: glow 2s linear infinite;
}

.logo:after
{
content: '';
position: absolute;
top: 55%;
left: 60%;
width: .5em;
height: .5em;
background: #00a2ff;
border-radius: 50%;
filter: blur(2px);
animation: glow 2s linear infinite;
}

.logo li:nth-child(1),
.logo li:nth-child(2),
.logo li:nth-child(3),
.logo li:nth-child(4)
{
list-style: none;
position: absolute;
top:50%;
height: 1px;
width: 100%;
background: rgb(103, 216, 236);
border-radius: 50%;
}

.logo li:nth-child(2)
{
transform: rotate(90deg);
}
.logo li:nth-child(3)
{
transform: rotate(45deg);
}
.logo li:nth-child(4)
{
transform: rotate(-45deg);
}

.logo li:nth-child(5),
.logo li:nth-child(6),
.logo li:nth-child(7)
{
list-style: none;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
border: 1px solid rgb(103, 216, 236);
background: transparent;
border-radius: 50%;
}
.logo li:nth-child(5)
{
width: 4em;
height: 4em;
}
.logo li:nth-child(6)
{
width: 8em;
height: 8em;
}
.logo li:nth-child(7)
{
width: 12em;
height: 12em;
}
.logo li:nth-child(8)
{
list-style: none;
position: absolute;
top: 50%;
left: 50%;
width: 9em;
height: 9em;
transform-origin: top left;
background: linear-gradient(45deg, #00c3ff 0%, transparent 50%);
animation: animate 2s linear infinite;
}
@keyframes animate
{
0%
{
transform: rotate(0deg);
}
100%
{
transform: rotate(360deg);
}
}

@keyframes glow
{
0%
{
opacity: 0;
}
50%
{
opacity: 1;
}
100%
{
opacity: 0;
}
}


/// HTML

<!--       <div class="baseLogo">-->
<!--        <img id="logoSoonar" src="./imagenes/logoSoonar.png" alt="Logotipo" name="logotipo" width="150"\>-->
<!--        <img id="mediaLuna" src="./imagenes/mediaLuna.png" alt="Logotipo" name="logo" width="260"\>-->

<!--        <a href="./index.html" >-->
<!--            <div class="logo">-->
<!--            <li></li>-->
<!--            <li></li>-->
<!--            <li></li>-->
<!--            <li></li>-->
<!--            <li></li>-->
<!--            <li></li>-->
<!--            <li></li>-->
<!--            <li></li>-->
<!--            </div></a>-->
<!--        </div>-->