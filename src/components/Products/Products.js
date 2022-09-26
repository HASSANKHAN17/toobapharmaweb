import React from 'react'
import "./Products.scss"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import trazadone from './trazadone.png'
import glycopyrrolate from './glycopyrrolate.png'
import mexiletine from './mexiletine.png'


function Products() {
  return (
    <div>
        <Header />
            <div className="products">
            <h1>Products</h1>

            <div className="api">
                <h3>Available APIs</h3>
                <div className="row m-auto api-div">
                    <div className="col-3 api-cont">
                    <img src={trazadone} alt="tarazadone" />
                        <h4>Glycopyrronium Bromide (CAS No.: 51186-83-5)</h4>
                        <p>Glycopyrronium Bromide Ph.Eur</p>
                    </div>
                    <div className="col-3 api-cont">
                        <img src={trazadone} alt="tarazadone" />
                        <h4>Trazodone Hydrochloride (CAS No.: 25332-39-2)</h4>
                        <p>Trazodone Hydrochloride USP</p>
                        <p>Trazodone Hydrochloride BP</p>
                    </div>
                    <div className="col-3 api-cont">
                        <img src={glycopyrrolate} alt="tarazadone" />
                        <h4>Glycopyrrolate (CAS No.: 596-51-0)</h4>
                        <p>Glycopyrrolate IP</p>
                        <p>Glycopyrrolate USP</p>
                    </div>
                    <div className="col-3 api-cont">
                        <img src={mexiletine} alt="tarazadone" />
                        <h4>Mexiletine Hydrochloride (CAS No.: 5370-01-4)</h4>
                        <p>Mexiletine Hydrochloride Ph.Eur</p>
                        <p>Mexiletine Hydrochloride USP</p>
                    </div>
                </div>

            </div>

            <h3>In-Progress APIs</h3>

            <div className="table-div">
            <table class="ui celled table">
            <thead>
                <tr><th>Sr No.</th>
                <th>Name</th>
                <th>CAS No.</th>
            </tr></thead>
            <tbody>
                <tr>
                <td data-label="Name">1</td>
                <td data-label="Age">Nitrofurantoin</td>
                <td data-label="Job">67-20-9</td>
                </tr>
                <tr>
                <td data-label="Name">2</td>
                <td data-label="Age">Tamsulosin Hydrochloride </td>
                <td data-label="Job">106463-17-3</td>
                </tr>
                <tr>
                <td data-label="Name">3</td>
                <td data-label="Age">Tolterodine Tartrate </td>
                <td data-label="Job">124937-52-6</td>
                </tr>
                <tr>
                <td data-label="Name">4</td>
                <td data-label="Age">Rivaroxaban </td>
                <td data-label="Job">366789-02-8</td>
                </tr>
                <tr>
                <td data-label="Name">5</td>
                <td data-label="Age">Aripiprazole </td>
                <td data-label="Job">129722-12-9</td>
                </tr>
                <tr>
                <td data-label="Name">6</td>
                <td data-label="Age">Modafinil </td>
                <td data-label="Job">129722-12-9</td>
                </tr>
                <tr>
                <td data-label="Name">7</td>
                <td data-label="Age">Cinacalcet Hydrochloride </td>
                <td data-label="Job">364782-34-3</td>
                </tr>
                <tr>
                <td data-label="Name">8</td>
                <td data-label="Age">Metronidazole Benzoate </td>
                <td data-label="Job">13182-89-3</td>
                </tr>
                <tr>
                <td data-label="Name">9</td>
                <td data-label="Age">Cyclizine Hydrochloride </td>
                <td data-label="Job">5897-18-7</td>
                </tr>
                <tr>
                <td data-label="Name">10</td>
                <td data-label="Age">Methylcobalamin </td>
                <td data-label="Job">13422-55-4</td>
                </tr>
            </tbody>
            </table>
            </div>
            
            </div>
        <Footer />
    </div>
  )
}

export default Products