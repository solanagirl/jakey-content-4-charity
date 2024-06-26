// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export interface ActionGetResponse {
    /** image url that represents the source of the action request */
    icon: string;
    /** describes the source of the action request */
    title: string;
    /** brief summary of the action to be performed */
    description: string;
    /** button text rendered to the user */
    label: string;
    /** UI state for the button being rendered to the user */
    disabled?: boolean;
    links?: {
      /** list of related Actions a user could perform */
      actions: LinkedAction[];
    };
    /** non-fatal error message to be displayed to the user */
    error?: ActionError;
  }

export interface ActionError {
    /** non-fatal error message to be displayed to the user */
    message: string;
} 

export interface LinkedAction {
    /** URL endpoint for an action */
    href: string;
    /** button text rendered to the user */
    label: string;
    /** Parameter to accept user input within an action */
    parameters?: [ActionParameter];
  }
  
  /** Parameter to accept user input within an action */
  export interface ActionParameter {
    /** parameter name in url */
    name: string;
    /** placeholder text for the user input field */
    label?: string;
    /** declare if this field is required (defaults to `false`) */
    required?: boolean;
  }
  
  
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ActionGetResponse>,
) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Encoding', 'compress');
    res.setHeader('Accept-Encoding', 'compress');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Encoding, Accept-Encoding');
    res.status(200).json({ 
        "title": "JakeyContent4Charity",
        "icon": "https://pbs.twimg.com/media/GRAgTyeX0AAUl6i?format=jpg&name=large",
        "description": "Unlock Jakey's video with this Blink! All proceeds go to charity.",
        "label": "Purchase",
        "links": {
            "actions": [
                {
                    "label": "Unlock video for $1", // button text
                    "href": "/api/video", // or /api/donate?amount={amount}
                  }
            ]
          },
       });
} else if (req.method == 'POST') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Encoding', 'compress');
    res.setHeader('Accept-Encoding', 'compress');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Encoding, Accept-Encoding');
  res.status(200).json({ 
    "title": "JakeyContent4Charity",
    "icon": "https://pbs.twimg.com/media/GRAgTyeX0AAUl6i?format=jpg&name=large",
    "description": "Unlock Jakey's video with this Blink! All proceeds go to charity.",
    "label": "Purchase",
    "links": {
        "actions": [
            {
                "label": "Unlock video for $1", // button text
                "href": "/api/video", // or /api/donate?amount={amount}
              }
        ]
      },
   });
} else if (req.method == 'GET') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Encoding', 'compress');
    res.setHeader('Accept-Encoding', 'compress');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Encoding, Accept-Encoding');
  res.status(200).json({ 
    "title": "JakeyContent4Charity",
    "icon": "https://pbs.twimg.com/media/GRAgTyeX0AAUl6i?format=jpg&name=large",
    "description": "Unlock Jakey's video with this Blink! All proceeds go to charity.",
    "label": "Purchase",
    "links": {
        "actions": [
            {
                "label": "Unlock video for $1", // button text
                "href": "/api/video", // or /api/donate?amount={amount}
              }
        ]
      },
   });
  }
}
