import useScript from "./useScript.js";
import { useRouter } from 'next/router'
import {useEffect } from 'react'
export default function Player(config) {
    const router = useRouter()
      if(typeof window !== 'undefined') {
        if (config.id && config.file) {
            if (!window.Playerjs) {
              window.pjsconfig = config;
              useScript("/playerjs-" + router.locale + ".js");
            } else {
              CreatePlayer(config);
            }
          }
    }

    return ""
}
function CreatePlayer(config) {
    if(typeof window !== 'undefined') {
    new window.Playerjs(config);
    }
}

if(typeof window !== 'undefined') {
    window.PlayerjsAsync = function () {
        if (window.pjsconfig) {
          CreatePlayer(window.pjsconfig);
          window.pjsconfig = undefined;
        }
      }
}