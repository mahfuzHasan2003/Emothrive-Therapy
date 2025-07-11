import {
   AiOutlineHistory,
   AiOutlineClockCircle,
   AiOutlineMessage
} from "react-icons/ai";
import { MdOutlineHeadphones } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { TbFocus2 } from "react-icons/tb";
import { GoTasklist } from "react-icons/go";



const asideNavLinks = [
   {
      id: 1,
      title: "Start New Session",
      icon: <AiOutlineMessage />
   },
   {
      id: 2,
      title: "Session History",
      icon: <AiOutlineHistory />
   },
   {
      id: 3,
      title: "Mode Tracker",
      icon: <TbFocus2 />

   },
   {
      id: 4,
      title: "Reminders",
      icon: <AiOutlineClockCircle />
   },
   {
      id: 5,
      title: "Task",
      icon: <GoTasklist />
   },
   {
      id: 6,
      title: "Music",
      icon: <MdOutlineHeadphones />
   },
   {
      id: 7,
      title: "Resources",
      icon: <IoBookOutline />
   }
];

const mostTalkedTopics = [
   {
      id: 1,
      topic: 'Analyse my personality'
   },
   {
      id: 2,
      topic: 'Work is stressful'
   },
   {
      id: 3,
      topic: 'Analyse my personality'
   },
   {
      id: 4,
      topic: 'Analyse my personality'
   }
]

const pricingPlans = [
   {
      id: 1,
      name: 'Basic Plan',
      recommended: false,
      description: 'Casual users needing regular support',
      features: [
         {
            id: 1,
            included: true,
            name: 'One day free trial'
         },
         {
            id: 2,
            included: false,
            name: 'Emotion-aware AI responses'
         },
         {
            id: 3,
            included: true,
            name: 'Personalized mental health insights'
         },
         {
            id: 4,
            included: false,
            name: 'Guided meditations & calming audios'
         },
         {
            id: 4,
            included: true,
            name: 'Validity - 7 days'
         },
      ],
      price: 19,
   },
   {
      id: 2,
      name: 'Standard Plan',
      recommended: true,
      description: 'Users with anxiety or depression',
      features: [
         {
            id: 1,
            included: true,
            name: 'One day free trial'
         },
         {
            id: 2,
            included: true,
            name: 'Emotion-aware AI responses'
         },
         {
            id: 3,
            included: true,
            name: 'Personalized mental health insights'
         },
         {
            id: 4,
            included: false,
            name: 'Guided meditations & calming audios'
         },
         {
            id: 4,
            included: true,
            name: 'Validity - 30 days'
         },
      ],
      price: 39,
   },
   {
      id: 3,
      name: 'Premium Plan',
      recommended: false,
      description: 'Deep healing and daily guided',
      features: [
         {
            id: 1,
            included: true,
            name: 'One day free trial'
         },
         {
            id: 2,
            included: true,
            name: 'Emotion-aware AI responses'
         },
         {
            id: 3,
            included: true,
            name: 'Personalized mental health insights'
         },
         {
            id: 4,
            included: true,
            name: 'Guided meditations & calming audios'
         },
         {
            id: 4,
            included: true,
            name: 'Validity - 90 days'
         },
      ],
      price: 99,
   },
]

export { asideNavLinks, mostTalkedTopics, pricingPlans };