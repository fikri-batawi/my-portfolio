import React from 'react';
import './datatable.scss';

const DataTable = () => {
    return (
        <>
            <table>
                <tbody>

                    <tr>
                        <td>Name</td>

                        <td>:</td>
                        <td>Muhammad Fikri</td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td>:</td>
                        <td>21</td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>:</td>
                        <td>Mampang Prapatan VII</td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td>:</td>
                        <td>+62 858 1125 7570</td>
                    </tr>
                    <tr>
                        <td>E-mail</td>
                        <td>:</td>
                        <td>senikoding@gmail.com</td>
                    </tr>
                    <tr>
                        <td>Freelance</td>
                        <td>:</td>
                        <td>Available</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default DataTable
