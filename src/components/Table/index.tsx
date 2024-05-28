import { useState } from "react";

const Table = () => {
const  [red,setRed]= useState(false)
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>age</th>
            <th>Admin</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>alecks</td>
            <td>12</td>
            <td>yes</td>
          </tr>
          <tr>
            <td>loky</td>
            <td>20</td>
            <td>yes</td>
          </tr>
        </tbody>
      </table>
      <table>
        <tr>
          <th colSpan={3}>
            Квадрат <em>Bagua</em>: Направление, Элемент, Цвет, Значение
          </th>
        </tr>
        <tr>
          <td onClick={()=> setRed(!red)} style={{
            background: !red ? "white": "red"
          }}>
            ...<strong>Северо-Запад</strong>...
          </td>
          <td>...</td>
          <td>...</td>
        </tr>
        <tr>
          <td>
            ...<strong>Запад</strong>...
          </td>
          <td>...</td>
          <td>...</td>
        </tr>
        <tr>
          <td>
            ...<strong>Севеp</strong>...
          </td>
          <td>...</td>
          <td>...</td>
        </tr>
        <tr>
          <td>
            ...<strong>восток </strong>...
          </td>
          <td>...</td>
          <td>...</td>
        </tr>
        <tr>
          <td>
            ...<strong>Юг</strong>...
          </td>
          <td>...</td>
          <td>...</td>
        </tr><tr>
          <td>
            ...<strong>Юго-Запад</strong>...
          </td>
          <td>...</td>
          <td>...</td>
        </tr><tr>
          <td>
            ...<strong>Северо-восток</strong>...
          </td>
          <td>...</td>
          <td>...</td>
        </tr>

        <tr>...ещё 2 строки такого же вида...</tr>
        <tr>...ещё 2 строки такого же вида...</tr>
      </table>
    </div>
  );
};

export default Table;
