import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

const data = {
  "tags": [
  {"id": 1, "name": "Services Sales Skills and the Whiteboard Methodology", "color": "red"},
  {"id": 2, "name": "The Value behind Technology Support Services: From Reactive to Proactive", "color": "green"},
  {"id": 3, "name": "Success Factors", "color": "gray"},
  {"id": 4, "name": "Selling Value", "color": "violet"},
  {"id": 5, "name": "Best Practice", "color": "yellow"}
  ],
  "modules": [
    {"id": 1, "name": "Welcome to the Academy"},
    {"id": 2, "name": "Whiteboard Selling Methodology", "tagId": 1, "mandatory": true, "completed": true},
    {"id": 3, "name": "Basic Sales Skills", "tagId": 1, "mandatory": true, "completed": true},
    {"id": 4, "name": "Client Stories", "tagId": 1, "mandatory": true, "completed": true},
    {"id": 5, "name": "Break=Fix", "tagId": 2, "mandatory": true, "completed": true},
    {"id": 6, "name": "Integrated HW+SW Support", "tagId": 2, "mandatory": true, "completed": true},
    {"id": 7, "name": "Multi-Vendor Services and Managed Services", "tagId": 2, "mandatory": true},
    {"id": 8, "name": "People, Process and Technology", "tagId": 3, "mandatory": true, "completed": false},
    {"id": 9, "name": "Linking Whiteboard to Value and Offerings", "tagId": 4, "mandatory": true, "completed": false},
    {"id": 10, "name": "Best Practice", "tagId": 5, "mandatory": true, "completed": false},
    {"id": 11, "name": "Business Partner Best Practice", "tagId": 5, "mandatory": true, "completed": false},
    {"id": 12, "name": "Geography Specific Modules", "completed": false},
    {"id": 13, "name": "What's next?", "mandatory": true, "completed": false}
  ]
};

class App extends Component {
  render() {

    return (
      <div className="main-container">
        <h1>TSS Academy - Navigation</h1>
        <div className="tags-container">

        <div className="tag-container">
            <svg width="150" height="250">
              <rect x="0" y="0" width="150" height="250" fill="#C6F3FF" />
              <text x="50" y="20" fill="blue" font-size="20" className="heavy">TSS
                <tspan x="30" y="40">Academy</tspan>
                <tspan x="20" y="60">Introduction</tspan>
              </text>
              <circle cx="75" cy="190" r="20" stroke="blue" stroke-width="6" fill="white" />
              <line x1="95" y1="190" x2="150" y2="190" stroke="blue" stroke-width="4"/>
            </svg>

        </div>

        <div className="tag-container">

            <svg width="450" height="250">
              <rect x="0" y="0" width="450" height="250" fill="#FCD9D3" />
              <text x="80" y="20" fill="red" font-size="20" className="heavy">Services Sales Skills and the
                <tspan x="100" y="40">Whiteboard Methodology</tspan>
              </text>
              <text x="40" y="90" fill="red" font-size="20" className="node">TSS
                <tspan x="10" y="110">Whiteboard</tspan>
                <tspan x="30" y="130">Selling</tspan>
                <tspan x="5" y="150">Methodology</tspan>
              </text>
              <text x="200" y="90" fill="red" font-size="20" className="node">Basic
                <tspan x="200" y="110">Sales</tspan>
                <tspan x="200" y="130">Skills</tspan>
              </text>
              <text x="345" y="90" fill="red" font-size="20" className="node">Client
                <tspan x="340" y="110">Stories</tspan>
              </text>

              <circle cx="75" cy="190" r="20" stroke="red" stroke-width="6" fill="white" />
              <line x1="0" y1="190" x2="55" y2="190" stroke="red" stroke-width="4"/>
              <line x1="95" y1="190" x2="205" y2="190" stroke="red" stroke-width="4"/>
              <circle cx="225" cy="190" r="20" stroke={data.tags[0].color} stroke-width="6" fill="white" />
              <line x1="245" y1="190" x2="350" y2="190" stroke="red" stroke-width="4"/>
              <circle cx="370" cy="190" r="20" stroke={data.tags[0].color} stroke-width="6" fill="white" />
              <line x1="390" y1="190" x2="450" y2="190" stroke="red" stroke-width="4"/>

            </svg>

        </div>

        <div className="tag-container">

            <svg width="450" height="250">

              <rect x="0" y="0" width="450" height="250" fill="#E9F3DA" />
              <text x="40" y="20" fill="green" font-size="20" className="heavy">The Value behind Technology Support
                <tspan x="45" y="40">Services: From Reactive to Proactive</tspan>
              </text>
              <text x="30" y="90" fill="green" font-size="20" className="node">Break=Fix</text>
              <text x="180" y="90" fill="green" font-size="20" className="node">Integrated
                <tspan x="185" y="110">HW + SW</tspan>
                <tspan x="190" y="130">Support</tspan>
              </text>
              <text x="320" y="90" fill="green" font-size="20" className="node">Multi-Vendor
                <tspan x="320" y="110">Servies and</tspan>
                <tspan x="330" y="130">Managed</tspan>
                <tspan x="332" y="150">Services</tspan>
              </text>
              <circle cx="75" cy="190" r="20" stroke={data.tags[1].color} stroke-width="6" fill="white" />
              <line x1="0" y1="190" x2="55" y2="190" stroke={data.tags[1].color} stroke-width="4"/>
              <line x1="95" y1="190" x2="205" y2="190" stroke={data.tags[1].color} stroke-width="4"/>
              <circle cx="225" cy="190" r="20" stroke={data.tags[1].color} stroke-width="6" fill="white" />
              <line x1="245" y1="190" x2="350" y2="190" stroke={data.tags[1].color} stroke-width="4"/>
              <circle cx="370" cy="190" r="20" stroke={data.tags[1].color} stroke-width="6" fill="white" />
              <line x1="390" y1="190" x2="450" y2="190" stroke={data.tags[1].color} stroke-width="4"/>

            </svg>

        </div>

        <div className="tag-container">

            <svg width="150" height="250">
              <rect x="0" y="0" width="150" height="250" fill="#EAEAEA" />
              <text x="40" y="20" fill="black" font-size="20" className="heavy">Success
                <tspan x="45" y="40">Factors</tspan>
              </text>
              <text x="45" y="90" fill="black" font-size="20" className="node">People,
                <tspan x="23" y="110">Process and</tspan>
                <tspan x="25" y="130">Technology</tspan>
              </text>
              <circle cx="75" cy="190" r="20" stroke="black" stroke-width="6" fill="white" />
              <line x1="95" y1="190" x2="150" y2="190" stroke="black" stroke-width="4"/>
              <line x1="0" y1="190" x2="55" y2="190" stroke="black" stroke-width="4"/>

            </svg>

        </div>

        <div className="tag-container">

            <svg width="150" height="250">
              <rect x="0" y="0" width="150" height="250" fill="#FCD9D3" />
              <text x="40" y="20" fill="red" font-size="20" className="heavy">Selling
                <tspan x="40" y="40">Values</tspan>
              </text>
              <text x="42" y="90" fill="red" font-size="20" className="node">Linking
                <tspan x="23" y="110">Whiteboard</tspan>
                <tspan x="20" y="130">to Value and</tspan>
                <tspan x="33" y="150">Offerings</tspan>
              </text>
              <circle cx="75" cy="190" r="20" stroke="red" stroke-width="6" fill="white" />
              <line x1="95" y1="190" x2="150" y2="190" stroke="red" stroke-width="4"/>
              <line x1="0" y1="190" x2="55" y2="190" stroke="red" stroke-width="4"/>

            </svg>
        </div>

        <div className="tag-container">

            <svg width="300" height="250">
              <rect x="0" y="0" width="300" height="250" fill="#E9F3DA" />
              <text x="80" y="20" fill="green" font-size="20" className="heavy">Best Practice</text>
              <text x="35" y="90" fill="green" font-size="20" className="node">TSS Best
                <tspan x="40" y="110">Practice</tspan>
              </text>
              <text x="170" y="90" fill="green" font-size="20" className="node">TSS Business
                <tspan x="175" y="110">Partner Best</tspan>
                <tspan x="195" y="130">Practice</tspan>
              </text>
              <circle cx="75" cy="190" r="20" stroke="green" stroke-width="6" fill="white" />
              <line x1="0" y1="190" x2="55" y2="190" stroke="green" stroke-width="4"/>
              <line x1="95" y1="190" x2="205" y2="190" stroke="green" stroke-width="4"/>
              <circle cx="225" cy="190" r="20" stroke="green" stroke-width="6" fill="white" />
              <line x1="245" y1="190" x2="300" y2="190" stroke="green" stroke-width="4"/>
            </svg>
        </div>

        <div className="tag-container">

            <svg width="270" height="250">
              <rect x="0" y="0" width="300" height="250" fill="#C6F3FF" />
              <text x="15" y="90" fill="blue" font-size="20" className="node">Geography
                <tspan x="25" y="110">Specific</tspan>
                <tspan x="25" y="130">Modules</tspan>
              </text>
              <text x="200" y="90" fill="blue" font-size="20" className="node">What's
                <tspan x="205" y="110">next?</tspan>
              </text>
              <circle cx="75" cy="190" r="20" stroke="blue" stroke-width="6" fill="white" />
              <line x1="0" y1="190" x2="55" y2="190" stroke="blue" stroke-width="4"/>
              <line x1="95" y1="190" x2="205" y2="190" stroke="blue" stroke-width="4"/>
              <circle cx="225" cy="190" r="20" stroke="blue" stroke-width="6" fill="white" />
            </svg>
        </div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
