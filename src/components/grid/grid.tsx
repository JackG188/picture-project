import * as React from 'react';
import './grid.scss';
import Tile from './tile/tile';

type location = {
    location: string;
    date: string;
    img: string;
};

export default class Grid extends React.Component {
    gridItems: location[] = [{
        location: 'barcelona',
        date: 'March 2018',
        // tslint:disable-next-line:max-line-length
        img: 'https://lh3.googleusercontent.com/EDSXtscZ2LasWYa9AWvF3hGzcz3TLGQvxNc1h8gA3xbZHRqlV50p_tYH0E11irb4cYquzZCI531dDj16f-kEiTKLRt_MRESZt7ewAUVq0x6y52SFpGc0cWFszW1M4b2EQlgXdcvn341itmsSTXj3Wr-ex9MSPSbSrsKxLgWhcMr2SpUooyEXXg3D7stlBeh8fyWUp1WozuCp0-onwfjQpapFRO1xIkD8JKJMJbzCB5LxofWXBHEUVewtuunxPcEvEBffQmRlNmvAP4odw7q-95K4Ry27SVKlgA0hisdbJsB9-hb1ier_6nuiU8neRmYPJOWSUrJnAJpOC8FAXSKrnIj6oI-9--Ad8fCgFR9OaInl3XHmRdwzPI48KaJ9ojxGYAUmuwyWJIOzmVuF2prZ9VMA8YtuzuLRXd2PCuRWvfahIxS5VK0j2J3A8eGocRMoJ3g9WWq4AIECpA_TK75s-sOfWLV_9Gs2aatW0e6Jlm_btBN5WOg7tIfw4gI3Xx_dhENknw_MAyZAbgL66izsPuC4a7fbFkxsAfuUrUSiLiATgNNJbrx64SQ01956wrIrAvQV6DWSW-nTtv7qborLZOy9Bhksm-xa6HjmM7nfvumjqxkHvr4dn5hDQ5BoFnHJSeYOXvWOtFbLDX0UjXLpULir=w1251-h938-no'
    },
    {
        location: 'montenegro',
        date: 'July 2018',
        // tslint:disable-next-line:max-line-length
        img: 'https://lh3.googleusercontent.com/bMj-g6Dn9dL9lyPxV9bwiiZ5RCRP70PtxW31Fb6tyfwvFW5nPDKu0r42ZyMbFdSvoL5AyYLTzzoZKp9KGfW9rIRiIjowN76aj5_QclNwsvV2t7GJbHQTnfW1eSRiOU4oKS9pbCtUpJrRW-ZKNNZiONxPtlfDbPsINz4ZhfKItBBRyF6mIv5z9GLvJCGp8KFopYzP3_dsgITS43MBxQac937-oEfcR6GbgY1n97iQv6OvuOtg_qf0-u8PQfID9JIqGdEZJ21ZWtfy0aLlzcTX0WJmuCRxbbwrXImCGA37doh0YI_GZ69wq0y8wdQYQRG6qsoL7vnhMAHKImFN7R36lz7V5nBn5P2-PlO3vtfPYVPF-25csxjI6qtQYFUAdh_T_5_Uzis8H30RjabUuw9slhsPIXjrVtzTfyLSlt-tNz1jhuFrph8KCmESW92UM1t8ZjJnLj7AHp1OLXXEkUvA8fwrNU3S_coeDNbU93INuQCCzRcBoXFoxpEIbsRrtW8JkuQnvPZz_KPAzxqprp6IqfRNwwnccozRD9vNPsK0WuqeWApWDD1vkaklHGYfbtDLrNJrzVqJxj9EF5xtgtBQvsHsujOivuXXtD0pX12shtWXHe5FCgRafZABV5E7Wlljqz0y7XNVsr59h5LCsw7mvymY=w786-h589-no'
    }
];
    render() {
        return (
            <div className="grid-container">
                <header className="App-header">
                    <h1 className="App-title">Picture Project</h1>
                </header>
                {this.gridItems.map((item, index) => {
                    return (
                        <Tile key={index} location={item.location} date={item.date} img={item.img}/>
                    );
                })}
            </div>
        );
    }
}