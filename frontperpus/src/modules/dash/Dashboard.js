import React, { Component } from 'react'
import TabelNav from '../pinjam/tabel/TabelNav'
import StatisticsCard from '../pinjam/card/StatisticsCard'
import TabelCol from '../koleksi/tabel/TabelCol'

export default class Dashboard extends Component {
    render() {
        return (
            <div className='container'>
                {/* <h1>Hello this is a Dashboard page</h1> */}

                <div className="mt-10">
                    <div className="row">
                    {/* <StatisticsCard/> */}
                        <div className="col-lg-8" style={{marginLeft:"20px"}}>
                        <TabelCol/>
                        
                        </div>
                        <div className="col-lg-4">
                            
                        <TabelNav/>  
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}