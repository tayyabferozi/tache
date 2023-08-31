import { useState } from "react";
import clone from "just-clone";

import Left from "./Left";
import Center from "./Center";
import Right from "./Right";
import "./Chat.scss";

const chatItemsData = [
  {
    img: "/assets/imgs/avatar-5.png",
    name: "Alexander",
    msg: "Nisi condimentum non.aslfaksdfkljh",
    time: "07:19 PM",
    active: true,
    chatData: [
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        text: "Hallo!!",
        state: "",
        time: new Date(),
      },
      {
        sender: "Me",
        userImg: "/assets/imgs/avatar-5.png",
        text: "Hello",
        state: "seen",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Me",
        userImg: "/assets/imgs/avatar-5.png",
        file: "File name.zip",
        fileSize: 4.5,
        state: "delivered",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Me",
        userImg: "/assets/imgs/avatar-5.png",
        text: "Let’s check the flie",
        state: "sent",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        reply: true,
        replyText: "Let’s check the file",
        text: "Let’s check the video first",
        state: "",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        images: [
          {
            src: "/assets/imgs/chat-img.png",
          },
          {
            src: "/assets/imgs/chat-img.png",
          },
          {
            src: "/assets/imgs/chat-img.png",
          },
        ],
        state: "",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        videos: [
          {
            src: "/assets/videos/sample.mp4",
          },
          {
            src: "/assets/videos/sample.mp4",
          },
          {
            src: "/assets/videos/sample.mp4",
          },
        ],
        state: "",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        files: [
          {
            name: "Package.zip",
            fileType: "ZIP",
          },
          {
            img: "/assets/imgs/chat-img.png",
            name: "andy-waloadllkads.jpg",
            fileType: "JPG",
          },
          {
            img: "/assets/imgs/chat-img.png",
            name: "Avatar.jpg",
            fileType: "JPG",
          },
          {
            name: "Package.zip",
            fileType: "ZIP",
          },
          {
            img: "/assets/imgs/chat-img.png",
            name: "andy-waloadllkads.jpg",
            fileType: "JPG",
          },
          {
            img: "/assets/imgs/chat-img.png",
            name: "Avatar.jpg",
            fileType: "JPG",
          },
        ],
        state: "",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
    ],
  },
  {
    img: "/assets/imgs/avatar-6.png",
    name: "Paquito",
    msg: "Nisi condimentum non.",
    time: "07:19 PM",
    chatData: [
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        text: "Hallo!!",
        state: "",
        time: new Date(),
      },
      {
        sender: "Me",
        userImg: "/assets/imgs/avatar-5.png",
        text: "Hello",
        state: "seen",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Me",
        userImg: "/assets/imgs/avatar-5.png",
        file: "File name.zip",
        fileSize: 4.5,
        state: "delivered",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Me",
        userImg: "/assets/imgs/avatar-5.png",
        text: "Let’s check the flie",
        state: "sent",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        reply: true,
        replyText: "Let’s check the file",
        text: "Let’s check the video first",
        state: "",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        images: [
          {
            src: "/assets/imgs/chat-img.png",
          },
          {
            src: "/assets/imgs/chat-img.png",
          },
          {
            src: "/assets/imgs/chat-img.png",
          },
        ],
        state: "",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        videos: [
          {
            src: "/assets/videos/sample.mp4",
          },
          {
            src: "/assets/videos/sample.mp4",
          },
          {
            src: "/assets/videos/sample.mp4",
          },
        ],
        state: "",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        files: [
          {
            name: "Package.zip",
            fileType: "ZIP",
          },
          {
            img: "/assets/imgs/chat-img.png",
            name: "andy-waloadllkads.jpg",
            fileType: "JPG",
          },
          {
            img: "/assets/imgs/chat-img.png",
            name: "Avatar.jpg",
            fileType: "JPG",
          },
          {
            name: "Package.zip",
            fileType: "ZIP",
          },
          {
            img: "/assets/imgs/chat-img.png",
            name: "andy-waloadllkads.jpg",
            fileType: "JPG",
          },
          {
            img: "/assets/imgs/chat-img.png",
            name: "Avatar.jpg",
            fileType: "JPG",
          },
        ],
        state: "",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
    ],
  },
  {
    img: "/assets/imgs/avatar-7.png",
    name: "Lesley",
    msg: "Nisi condimentum non.",
    time: "07:19 PM",
    active: true,
    unread: true,
    chatData: [
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        text: "Hallo!!",
        state: "",
        time: new Date(),
      },
      {
        sender: "Me",
        userImg: "/assets/imgs/avatar-5.png",
        text: "Hello",
        state: "seen",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Me",
        userImg: "/assets/imgs/avatar-5.png",
        file: "File name.zip",
        fileSize: 4.5,
        state: "delivered",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Me",
        userImg: "/assets/imgs/avatar-5.png",
        text: "Let’s check the flie",
        state: "sent",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        reply: true,
        replyText: "Let’s check the file",
        text: "Let’s check the video first",
        state: "",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        images: [
          {
            src: "/assets/imgs/chat-img.png",
          },
          {
            src: "/assets/imgs/chat-img.png",
          },
          {
            src: "/assets/imgs/chat-img.png",
          },
        ],
        state: "",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        videos: [
          {
            src: "/assets/videos/sample.mp4",
          },
          {
            src: "/assets/videos/sample.mp4",
          },
          {
            src: "/assets/videos/sample.mp4",
          },
        ],
        state: "",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        files: [
          {
            name: "Package.zip",
            fileType: "ZIP",
          },
          {
            img: "/assets/imgs/chat-img.png",
            name: "andy-waloadllkads.jpg",
            fileType: "JPG",
          },
          {
            img: "/assets/imgs/chat-img.png",
            name: "Avatar.jpg",
            fileType: "JPG",
          },
          {
            name: "Package.zip",
            fileType: "ZIP",
          },
          {
            img: "/assets/imgs/chat-img.png",
            name: "andy-waloadllkads.jpg",
            fileType: "JPG",
          },
          {
            img: "/assets/imgs/chat-img.png",
            name: "Avatar.jpg",
            fileType: "JPG",
          },
        ],
        state: "",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
    ],
  },
  {
    img: "/assets/imgs/avatar-8.png",
    name: "Alucard",
    msg: "Nisi condimentum non.",
    time: "07:19 PM",
    chatData: [
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        text: "Hallo!!",
        state: "",
        time: new Date(),
      },
      {
        sender: "Me",
        userImg: "/assets/imgs/avatar-5.png",
        text: "Hello",
        state: "seen",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Me",
        userImg: "/assets/imgs/avatar-5.png",
        file: "File name.zip",
        fileSize: 4.5,
        state: "delivered",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Me",
        userImg: "/assets/imgs/avatar-5.png",
        text: "Let’s check the flie",
        state: "sent",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        reply: true,
        replyText: "Let’s check the file",
        text: "Let’s check the video first",
        state: "",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        images: [
          {
            src: "/assets/imgs/chat-img.png",
          },
          {
            src: "/assets/imgs/chat-img.png",
          },
          {
            src: "/assets/imgs/chat-img.png",
          },
        ],
        state: "",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        videos: [
          {
            src: "/assets/videos/sample.mp4",
          },
          {
            src: "/assets/videos/sample.mp4",
          },
          {
            src: "/assets/videos/sample.mp4",
          },
        ],
        state: "",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        files: [
          {
            name: "Package.zip",
            fileType: "ZIP",
          },
          {
            img: "/assets/imgs/chat-img.png",
            name: "andy-waloadllkads.jpg",
            fileType: "JPG",
          },
          {
            img: "/assets/imgs/chat-img.png",
            name: "Avatar.jpg",
            fileType: "JPG",
          },
          {
            name: "Package.zip",
            fileType: "ZIP",
          },
          {
            img: "/assets/imgs/chat-img.png",
            name: "andy-waloadllkads.jpg",
            fileType: "JPG",
          },
          {
            img: "/assets/imgs/chat-img.png",
            name: "Avatar.jpg",
            fileType: "JPG",
          },
        ],
        state: "",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
    ],
  },
  {
    img: "/assets/imgs/avatar-9.png",
    name: "Melissa",
    msg: "Nisi condimentum non.",
    time: "07:19 PM",
    active: true,
    unread: true,
    chatData: [
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        text: "Hallo!!",
        state: "",
        time: new Date(),
      },
      {
        sender: "Me",
        userImg: "/assets/imgs/avatar-5.png",
        text: "Hello",
        state: "seen",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Me",
        userImg: "/assets/imgs/avatar-5.png",
        file: "File name.zip",
        fileSize: 4.5,
        state: "delivered",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Me",
        userImg: "/assets/imgs/avatar-5.png",
        text: "Let’s check the flie",
        state: "sent",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        reply: true,
        replyText: "Let’s check the file",
        text: "Let’s check the video first",
        state: "",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        images: [
          {
            src: "/assets/imgs/chat-img.png",
          },
          {
            src: "/assets/imgs/chat-img.png",
          },
          {
            src: "/assets/imgs/chat-img.png",
          },
        ],
        state: "",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        videos: [
          {
            src: "/assets/videos/sample.mp4",
          },
          {
            src: "/assets/videos/sample.mp4",
          },
          {
            src: "/assets/videos/sample.mp4",
          },
        ],
        state: "",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        files: [
          {
            name: "Package.zip",
            fileType: "ZIP",
          },
          {
            img: "/assets/imgs/chat-img.png",
            name: "andy-waloadllkads.jpg",
            fileType: "JPG",
          },
          {
            img: "/assets/imgs/chat-img.png",
            name: "Avatar.jpg",
            fileType: "JPG",
          },
          {
            name: "Package.zip",
            fileType: "ZIP",
          },
          {
            img: "/assets/imgs/chat-img.png",
            name: "andy-waloadllkads.jpg",
            fileType: "JPG",
          },
          {
            img: "/assets/imgs/chat-img.png",
            name: "Avatar.jpg",
            fileType: "JPG",
          },
        ],
        state: "",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
    ],
  },
  {
    img: "/assets/imgs/avatar-4.png",
    name: "Ruby",
    msg: "Nisi condimentum non.",
    time: "07:19 PM",
    chatData: [
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        text: "Hallo!!",
        state: "",
        time: new Date(),
      },
      {
        sender: "Me",
        userImg: "/assets/imgs/avatar-5.png",
        text: "Hello",
        state: "seen",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Me",
        userImg: "/assets/imgs/avatar-5.png",
        file: "File name.zip",
        fileSize: 4.5,
        state: "delivered",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Me",
        userImg: "/assets/imgs/avatar-5.png",
        text: "Let’s check the flie",
        state: "sent",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        reply: true,
        replyText: "Let’s check the file",
        text: "Let’s check the video first",
        state: "",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        images: [
          {
            src: "/assets/imgs/chat-img.png",
          },
          {
            src: "/assets/imgs/chat-img.png",
          },
          {
            src: "/assets/imgs/chat-img.png",
          },
        ],
        state: "",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        videos: [
          {
            src: "/assets/videos/sample.mp4",
          },
          {
            src: "/assets/videos/sample.mp4",
          },
          {
            src: "/assets/videos/sample.mp4",
          },
        ],
        state: "",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        files: [
          {
            name: "Package.zip",
            fileType: "ZIP",
          },
          {
            img: "/assets/imgs/chat-img.png",
            name: "andy-waloadllkads.jpg",
            fileType: "JPG",
          },
          {
            img: "/assets/imgs/chat-img.png",
            name: "Avatar.jpg",
            fileType: "JPG",
          },
          {
            name: "Package.zip",
            fileType: "ZIP",
          },
          {
            img: "/assets/imgs/chat-img.png",
            name: "andy-waloadllkads.jpg",
            fileType: "JPG",
          },
          {
            img: "/assets/imgs/chat-img.png",
            name: "Avatar.jpg",
            fileType: "JPG",
          },
        ],
        state: "",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
    ],
  },
  {
    img: "/assets/imgs/avatar-5.png",
    name: "Alexander",
    msg: "Nisi condimentum non.aslfaksdfkljh",
    time: "07:19 PM",
    active: true,
    chatData: [
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        text: "Hallo!!",
        state: "",
        time: new Date(),
      },
      {
        sender: "Me",
        userImg: "/assets/imgs/avatar-5.png",
        text: "Hello",
        state: "seen",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Me",
        userImg: "/assets/imgs/avatar-5.png",
        file: "File name.zip",
        fileSize: 4.5,
        state: "delivered",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Me",
        userImg: "/assets/imgs/avatar-5.png",
        text: "Let’s check the flie",
        state: "sent",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        reply: true,
        replyText: "Let’s check the file",
        text: "Let’s check the video first",
        state: "",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        images: [
          {
            src: "/assets/imgs/chat-img.png",
          },
          {
            src: "/assets/imgs/chat-img.png",
          },
          {
            src: "/assets/imgs/chat-img.png",
          },
        ],
        state: "",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        videos: [
          {
            src: "/assets/videos/sample.mp4",
          },
          {
            src: "/assets/videos/sample.mp4",
          },
          {
            src: "/assets/videos/sample.mp4",
          },
        ],
        state: "",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        files: [
          {
            name: "Package.zip",
            fileType: "ZIP",
          },
          {
            img: "/assets/imgs/chat-img.png",
            name: "andy-waloadllkads.jpg",
            fileType: "JPG",
          },
          {
            img: "/assets/imgs/chat-img.png",
            name: "Avatar.jpg",
            fileType: "JPG",
          },
          {
            name: "Package.zip",
            fileType: "ZIP",
          },
          {
            img: "/assets/imgs/chat-img.png",
            name: "andy-waloadllkads.jpg",
            fileType: "JPG",
          },
          {
            img: "/assets/imgs/chat-img.png",
            name: "Avatar.jpg",
            fileType: "JPG",
          },
        ],
        state: "",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
    ],
  },
  {
    img: "/assets/imgs/avatar-6.png",
    name: "Paquito",
    msg: "Nisi condimentum non.",
    time: "07:19 PM",
    chatData: [
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        text: "Hallo!!",
        state: "",
        time: new Date(),
      },
      {
        sender: "Me",
        userImg: "/assets/imgs/avatar-5.png",
        text: "Hello",
        state: "seen",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Me",
        userImg: "/assets/imgs/avatar-5.png",
        file: "File name.zip",
        fileSize: 4.5,
        state: "delivered",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Me",
        userImg: "/assets/imgs/avatar-5.png",
        text: "Let’s check the flie",
        state: "sent",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        reply: true,
        replyText: "Let’s check the file",
        text: "Let’s check the video first",
        state: "",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        images: [
          {
            src: "/assets/imgs/chat-img.png",
          },
          {
            src: "/assets/imgs/chat-img.png",
          },
          {
            src: "/assets/imgs/chat-img.png",
          },
        ],
        state: "",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        videos: [
          {
            src: "/assets/videos/sample.mp4",
          },
          {
            src: "/assets/videos/sample.mp4",
          },
          {
            src: "/assets/videos/sample.mp4",
          },
        ],
        state: "",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        files: [
          {
            name: "Package.zip",
            fileType: "ZIP",
          },
          {
            img: "/assets/imgs/chat-img.png",
            name: "andy-waloadllkads.jpg",
            fileType: "JPG",
          },
          {
            img: "/assets/imgs/chat-img.png",
            name: "Avatar.jpg",
            fileType: "JPG",
          },
          {
            name: "Package.zip",
            fileType: "ZIP",
          },
          {
            img: "/assets/imgs/chat-img.png",
            name: "andy-waloadllkads.jpg",
            fileType: "JPG",
          },
          {
            img: "/assets/imgs/chat-img.png",
            name: "Avatar.jpg",
            fileType: "JPG",
          },
        ],
        state: "",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
    ],
  },
  {
    img: "/assets/imgs/avatar-7.png",
    name: "Lesley",
    msg: "Nisi condimentum non.",
    time: "07:19 PM",
    active: true,
    unread: true,
    chatData: [
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        text: "Hallo!!",
        state: "",
        time: new Date(),
      },
      {
        sender: "Me",
        userImg: "/assets/imgs/avatar-5.png",
        text: "Hello",
        state: "seen",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Me",
        userImg: "/assets/imgs/avatar-5.png",
        file: "File name.zip",
        fileSize: 4.5,
        state: "delivered",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Me",
        userImg: "/assets/imgs/avatar-5.png",
        text: "Let’s check the flie",
        state: "sent",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        reply: true,
        replyText: "Let’s check the file",
        text: "Let’s check the video first",
        state: "",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        images: [
          {
            src: "/assets/imgs/chat-img.png",
          },
          {
            src: "/assets/imgs/chat-img.png",
          },
          {
            src: "/assets/imgs/chat-img.png",
          },
        ],
        state: "",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        videos: [
          {
            src: "/assets/videos/sample.mp4",
          },
          {
            src: "/assets/videos/sample.mp4",
          },
          {
            src: "/assets/videos/sample.mp4",
          },
        ],
        state: "",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        files: [
          {
            name: "Package.zip",
            fileType: "ZIP",
          },
          {
            img: "/assets/imgs/chat-img.png",
            name: "andy-waloadllkads.jpg",
            fileType: "JPG",
          },
          {
            img: "/assets/imgs/chat-img.png",
            name: "Avatar.jpg",
            fileType: "JPG",
          },
          {
            name: "Package.zip",
            fileType: "ZIP",
          },
          {
            img: "/assets/imgs/chat-img.png",
            name: "andy-waloadllkads.jpg",
            fileType: "JPG",
          },
          {
            img: "/assets/imgs/chat-img.png",
            name: "Avatar.jpg",
            fileType: "JPG",
          },
        ],
        state: "",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
    ],
  },
  {
    img: "/assets/imgs/avatar-8.png",
    name: "Alucard",
    msg: "Nisi condimentum non.",
    time: "07:19 PM",
    chatData: [
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        text: "Hallo!!",
        state: "",
        time: new Date(),
      },
      {
        sender: "Me",
        userImg: "/assets/imgs/avatar-5.png",
        text: "Hello",
        state: "seen",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Me",
        userImg: "/assets/imgs/avatar-5.png",
        file: "File name.zip",
        fileSize: 4.5,
        state: "delivered",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Me",
        userImg: "/assets/imgs/avatar-5.png",
        text: "Let’s check the flie",
        state: "sent",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        reply: true,
        replyText: "Let’s check the file",
        text: "Let’s check the video first",
        state: "",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        images: [
          {
            src: "/assets/imgs/chat-img.png",
          },
          {
            src: "/assets/imgs/chat-img.png",
          },
          {
            src: "/assets/imgs/chat-img.png",
          },
        ],
        state: "",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        videos: [
          {
            src: "/assets/videos/sample.mp4",
          },
          {
            src: "/assets/videos/sample.mp4",
          },
          {
            src: "/assets/videos/sample.mp4",
          },
        ],
        state: "",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        files: [
          {
            name: "Package.zip",
            fileType: "ZIP",
          },
          {
            img: "/assets/imgs/chat-img.png",
            name: "andy-waloadllkads.jpg",
            fileType: "JPG",
          },
          {
            img: "/assets/imgs/chat-img.png",
            name: "Avatar.jpg",
            fileType: "JPG",
          },
          {
            name: "Package.zip",
            fileType: "ZIP",
          },
          {
            img: "/assets/imgs/chat-img.png",
            name: "andy-waloadllkads.jpg",
            fileType: "JPG",
          },
          {
            img: "/assets/imgs/chat-img.png",
            name: "Avatar.jpg",
            fileType: "JPG",
          },
        ],
        state: "",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
    ],
  },
  {
    img: "/assets/imgs/avatar-9.png",
    name: "Melissa",
    msg: "Nisi condimentum non.",
    time: "07:19 PM",
    active: true,
    unread: true,
    chatData: [
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        text: "Hallo!!",
        state: "",
        time: new Date(),
      },
      {
        sender: "Me",
        userImg: "/assets/imgs/avatar-5.png",
        text: "Hello",
        state: "seen",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Me",
        userImg: "/assets/imgs/avatar-5.png",
        file: "File name.zip",
        fileSize: 4.5,
        state: "delivered",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Me",
        userImg: "/assets/imgs/avatar-5.png",
        text: "Let’s check the flie",
        state: "sent",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        reply: true,
        replyText: "Let’s check the file",
        text: "Let’s check the video first",
        state: "",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        images: [
          {
            src: "/assets/imgs/chat-img.png",
          },
          {
            src: "/assets/imgs/chat-img.png",
          },
          {
            src: "/assets/imgs/chat-img.png",
          },
        ],
        state: "",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        videos: [
          {
            src: "/assets/videos/sample.mp4",
          },
          {
            src: "/assets/videos/sample.mp4",
          },
          {
            src: "/assets/videos/sample.mp4",
          },
        ],
        state: "",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        files: [
          {
            name: "Package.zip",
            fileType: "ZIP",
          },
          {
            img: "/assets/imgs/chat-img.png",
            name: "andy-waloadllkads.jpg",
            fileType: "JPG",
          },
          {
            img: "/assets/imgs/chat-img.png",
            name: "Avatar.jpg",
            fileType: "JPG",
          },
          {
            name: "Package.zip",
            fileType: "ZIP",
          },
          {
            img: "/assets/imgs/chat-img.png",
            name: "andy-waloadllkads.jpg",
            fileType: "JPG",
          },
          {
            img: "/assets/imgs/chat-img.png",
            name: "Avatar.jpg",
            fileType: "JPG",
          },
        ],
        state: "",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
    ],
  },
  {
    img: "/assets/imgs/avatar-4.png",
    name: "Ruby",
    msg: "Nisi condimentum non.",
    time: "07:19 PM",
    chatData: [
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        text: "Hallo!!",
        state: "",
        time: new Date(),
      },
      {
        sender: "Me",
        userImg: "/assets/imgs/avatar-5.png",
        text: "Hello",
        state: "seen",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Me",
        userImg: "/assets/imgs/avatar-5.png",
        file: "File name.zip",
        fileSize: 4.5,
        state: "delivered",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Me",
        userImg: "/assets/imgs/avatar-5.png",
        text: "Let’s check the flie",
        state: "sent",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        reply: true,
        replyText: "Let’s check the file",
        text: "Let’s check the video first",
        state: "",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        images: [
          {
            src: "/assets/imgs/chat-img.png",
          },
          {
            src: "/assets/imgs/chat-img.png",
          },
          {
            src: "/assets/imgs/chat-img.png",
          },
        ],
        state: "",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        videos: [
          {
            src: "/assets/videos/sample.mp4",
          },
          {
            src: "/assets/videos/sample.mp4",
          },
          {
            src: "/assets/videos/sample.mp4",
          },
        ],
        state: "",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        sender: "Alexander",
        userImg: "/assets/imgs/avatar-7.png",
        files: [
          {
            name: "Package.zip",
            fileType: "ZIP",
          },
          {
            img: "/assets/imgs/chat-img.png",
            name: "andy-waloadllkads.jpg",
            fileType: "JPG",
          },
          {
            img: "/assets/imgs/chat-img.png",
            name: "Avatar.jpg",
            fileType: "JPG",
          },
          {
            name: "Package.zip",
            fileType: "ZIP",
          },
          {
            img: "/assets/imgs/chat-img.png",
            name: "andy-waloadllkads.jpg",
            fileType: "JPG",
          },
          {
            img: "/assets/imgs/chat-img.png",
            name: "Avatar.jpg",
            fileType: "JPG",
          },
        ],
        state: "",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
    ],
  },
];

const Chat = () => {
  const [isLeftCollapsed, setIsLeftCollapsed] = useState(
    window.innerWidth <= 991 ? true : false
  );
  const [isRightCollapsed, setIsRightCollapsed] = useState(
    window.innerWidth <= 1280 ? true : false
  );
  const [isThreadActive, setIsThreadActive] = useState(false);
  const [isFilesSectionActive, setIsFilesSectionActive] = useState(true);
  const [isChatLoading, setIsChatLoading] = useState(false);
  const [selectedChatIdx, setSelectedChatIdx] = useState(1);
  const [chatItems, setChatItems] = useState(chatItemsData);
  const [isMoreChatLoading, setIsMoreChatLoading] = useState(false);
  const [isMoreChatMsgsLoading, setIsMoreChatMsgsLoading] = useState(false);

  const onChatSelect = (idx) => {
    setIsChatLoading(true);
    setSelectedChatIdx(idx);
    setTimeout(() => {
      setIsChatLoading(false);
    }, 2000);
  };

  const loadMoreChatList = () => {
    setIsMoreChatLoading(true);
    setTimeout(() => {
      setIsMoreChatLoading(false);
    }, 4000);
    setChatItems((prevState) => {
      const newState = clone(prevState);

      return newState.concat(chatItemsData.slice(0, 5));
    });
  };

  const loadMoreChatListMsgs = () => {
    setIsMoreChatMsgsLoading(true);
    setTimeout(() => {
      setIsMoreChatMsgsLoading(false);
    }, 2000);
    setChatItems((prevState) => {
      const newState = clone(prevState);

      newState[selectedChatIdx] = {
        ...newState[selectedChatIdx],
        chatData: newState[selectedChatIdx].chatData.concat(
          newState[selectedChatIdx].chatData.slice(0, 5)
        ),
      };

      return newState;
    });
  };

  const deleteMsg = (idx, idx2) => {
    setChatItems((prevState) => {
      const newState = clone(prevState);
      newState[idx].chatData.splice(idx2, 1);
      console.log(newState);
      return newState;
    });
  };
  return (
    <div id="messaging-layout">
      <Left
        isLeftCollapsed={isLeftCollapsed}
        setIsLeftCollapsed={setIsLeftCollapsed}
        isRightCollapsed={isRightCollapsed}
        items={chatItems}
        selectedChatIdx={selectedChatIdx}
        onChatSelect={onChatSelect}
        loadMoreChatList={loadMoreChatList}
        isMoreChatLoading={isMoreChatLoading}
      />
      <Center
        setIsThreadActive={setIsThreadActive}
        selectedChatIdx={selectedChatIdx}
        isChatLoading={isChatLoading}
        chatData={chatItems[selectedChatIdx].chatData}
        loadMoreChatListMsgs={loadMoreChatListMsgs}
        isMoreChatMsgsLoading={isMoreChatMsgsLoading}
        onDeleteMsg={deleteMsg}
        setIsRightCollapsed={setIsRightCollapsed}
      />
      <Right
        isThreadActive={isThreadActive}
        setIsThreadActive={setIsThreadActive}
        isFilesSectionActive={isFilesSectionActive}
        setIsFilesSectionActive={setIsFilesSectionActive}
        isRightCollapsed={isRightCollapsed}
        setIsRightCollapsed={setIsRightCollapsed}
        isLeftCollapsed={isLeftCollapsed}
      />
    </div>
  );
};

export default Chat;
