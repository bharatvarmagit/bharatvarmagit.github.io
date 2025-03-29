import React from "react";
import { Timeline } from "@/components/ui/timeline";
import NextjsIcon from '../public/nextjs-48.png'
import ReactIcon from '../public/react-48.png'
import PostgresIcon from '../public/postgres-48.png'
import TypescriptIcon from '../public/typescript-48.png'
import ExpressIcon from '../public/express-js.png'
import AppstoreIcon from '../public/app-store-48.png'
import PlaystoreIcon from '../public/play-store-48.png'
import AwsIcon from '../public/aws-logo.png'
import seedstagesIcon from '../public/seedstages.jpeg'
import forwoodSafetyIcon from '../public/ForwoodSafetyLogo.jpeg'
import tapHealthLogo from '../public/taphealthLogo.jpeg'
import FirebaseIcon from '../public/google-firebase.png'
import SpringbootIcon from '../public/spring-boot-48.png'
import MySQLIcon from '../public/mysql-48.png'
import tclIcon from '../public/tcl.jpeg'
import bsIcon from '../public/bsIcon.svg'
import PythonIcon  from '../public/python-48.png'


import WorkContent from "./work-content";

export function WorkExperience() {
  const data = [
    {
      title: "Aug 24 - Nov 24",
      content: (
        <WorkContent
            company="Tap Health"
            companyIcon={tapHealthLogo}
            role="Frontend Lead"
            description="Led the development of an AI-powered hospital chatbot, streamlining healthcare access with instant answers, smart diagnosis, and seamless appointment scheduling."
            description2="Designed an analytics dashboard to track key metrics, boosting lead conversion by 200% and user engagement by 300%."
            description3="Built with Next.js, React, Postgres, Prisma and hosted on Coolify servers."
            tools={[
                {icon:NextjsIcon,name:'Next.js'},
                {icon:ReactIcon,name:'React.js'},
                {icon:TypescriptIcon,name:'Typescript'},
                {icon:PostgresIcon,name:'postgres'}
            ]}
            />
      ),
    },
    {
      title: "Jan 23 - Oct 23",
      content: (
        <WorkContent
            company="The Crypto Launch Pad"
            companyIcon={tclIcon}
            role="Software Engineer"
            description="Led the development of ViPay, a crypto wallet application enabling users to create, receive, and send crypto assets while tracking real-time USD/INR prices, with a UI and functionality similar to Trust Wallet."
            description2="Built with React Native, RealmDB, Ethers.js, Java SpringBoot, Express.js, MySQL and hosted on AWS EC2"
            tools={[
                {icon:ReactIcon,name:'React Native'},
                {icon:SpringbootIcon,name:'Springboot'},
                {icon:TypescriptIcon,name:'Typescript'},
                {icon:ExpressIcon,name:'Express.js'},
                {icon:MySQLIcon,name:'MySQL'},
                {icon:AwsIcon,name:'AWS EC2'}
                // {icon:ExpressIcon,name:'Express.js'}
                // {icon:ExpressIcon,name:'Express.js'}

            ]}
            />
      ),
    },
    {
      title: "May 21 - Dec 22",
      content: (
        <WorkContent
            company="Backstage Social"
            companyIcon={bsIcon}
            role="Co-Founder & Tech Lead"
            description="Co-founded and developed a cross-platform networking app with a swiping deck UI, connecting students and professionals within the same institution or workspace."
            description2="Built with React Native, RealmDB, Firebase and published on App store and Play store"
            tools={[
                {icon:ReactIcon,name:'React Native'},
                {icon:FirebaseIcon,name:'Firebase'},
                {icon:AppstoreIcon,name:'App store'},
                {icon:PlaystoreIcon,name:'Play store'},
                // {icon:ExpressIcon,name:'Express.js'}
                // {icon:ExpressIcon,name:'Express.js'}

            ]}
            />
      ),
    },
    {
      title: "Nov 20 - Apr 21",
      content: (
        <WorkContent
            company="Forwood Safety"
            role="Software Engineer"
            companyIcon={forwoodSafetyIcon}
            description="Developed a diverse set of features involving updating code and libraries associated with both frontend and backend tech stack for a React based CRM tool used by mining companies worldwide."
            description2="Built with React and AWS Terraform architecture with lambda functions written in python while utilising AWS - RDBMS and Dynamo DB"
            tools={[
                {icon:ReactIcon,name:'React.js'},
                {icon:AwsIcon,name:'AWS Terraform'},
                {icon:PythonIcon,name:'Python'},
                // {icon:ExpressIcon,name:'Express.js'}
                // {icon:ExpressIcon,name:'Express.js'}

            ]}
            />
      ),
    },
    {
      title: "Jun 20 - Oct 20",
      content: (
        <WorkContent
            company="Seedstages"
            role="Software Engineer"
            companyIcon={seedstagesIcon}
            description="Designed a job tracking system with real-time updates, Zoom SDK for interview scheduling with time slots, and Google Calendar integration for automated RSVPs."
            description2="Mentored four interns in React Native and Firebase, guiding them through project tasks and technical challenges."
            description3="Built with React Native, Firebase and published on App store and Play store."
            tools={[
                {icon:ReactIcon,name:'React Native'},
                {icon:FirebaseIcon,name:'Firebase'},
                {icon:AppstoreIcon,name:'App store'},
                {icon:PlaystoreIcon,name:'Play store'},
                // {icon:ExpressIcon,name:'Express.js'}
                // {icon:ExpressIcon,name:'Express.js'}

            ]}
            />
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

export default WorkExperience
