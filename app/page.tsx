// import Image from "next/image";
import Hero from '../components/hero'
import WorkExperience from '@/components/work-experience';
import NextjsIcon from '../public/nextjs-48.png'
import ReactIcon from '../public/react-48.png'
import PostgresIcon from '../public/postgres-48.png'
import TypescriptIcon from '../public/typescript-48.png'
import ExpressIcon from '../public/express-js.png'
import AppstoreIcon from '../public/app-store-48.png'
import Mongo from '../public/mongodb.png'
import PlaystoreIcon from '../public/play-store-48.png'
import AwsIcon from '../public/aws-logo.png'
import FirebaseIcon from '../public/google-firebase.png'
import SpringbootIcon from '../public/spring-boot-48.png'
import MySQLIcon from '../public/mysql-48.png'
import PythonIcon  from '../public/python-48.png'

const skills =[
                {icon:NextjsIcon,name:'Next.js'},
                {icon:ReactIcon,name:'React.js'},
                {icon:ReactIcon,name:'React-Native'},
                {icon:ExpressIcon,name:'Express.js'},
                {icon:SpringbootIcon,name:'Springboot'},
                {icon:FirebaseIcon,name:'Firebase.js'},
                {icon:MySQLIcon,name:'MySQL'},
                {icon:PostgresIcon,name:'Postgres'},
                {icon:Mongo,name:'Mongo'},
                {icon:TypescriptIcon,name:'Typescript'},
                {icon:PythonIcon,name:'Python'},
                {icon:AwsIcon,name:'AWS'},
                {icon:AppstoreIcon,name:'App store'},
                {icon:PlaystoreIcon,name:'Play store'},

              ]
export default function Home() {

  return (
    <main
      className="bg-black flex flex-col justify-center items-center overflow-hidden mx-auto">
      <div className="w-screen">

       <Hero skills={skills}/>
       <WorkExperience/>
      </div>
    </main>
  );
}
