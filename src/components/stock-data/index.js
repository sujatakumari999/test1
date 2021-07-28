import React from "react";
import "./index.css";

export default function StockData() {
  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <input type="text" className="large" placeholder="5-January-2000" id="app-input" data-testid="app-input"/>
        <button className="" id="submit-button" data-testid="submit-button">Search</button>
      </section>
      <ul className="mt-50 slide-up-fade-in styled" id="stockData" data-testid="stock-data">
        <li className="py-10"></li>
      </ul>
      <div className="mt-50 slide-up-fade-in" id="no-result" data-testid="no-result"></div>
    </div>
  );
}

class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return /*#__PURE__*/(
      React.createElement("tr", null, /*#__PURE__*/
      React.createElement("th", { colSpan: "2" },
      category)));



  }}


class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ?
    product.name : /*#__PURE__*/
    React.createElement("span", { style: { color: 'red' } },
    product.name);


    return /*#__PURE__*/(
      React.createElement("tr", null, /*#__PURE__*/
      React.createElement("td", null, name), /*#__PURE__*/
      React.createElement("td", null, product.price)));


  }}


class ProductTable extends React.Component {
  render() {
    const rows = [];
    let lastCategory = null;

    this.props.products.forEach(product => {
      if (product.category !== lastCategory) {
        rows.push( /*#__PURE__*/
        React.createElement(ProductCategoryRow, {
          category: product.category,
          key: product.category }));

      }
      rows.push( /*#__PURE__*/
      React.createElement(ProductRow, {
        product: product,
        key: product.name }));

      lastCategory = product.category;
    });

    return /*#__PURE__*/(
      React.createElement("table", null, /*#__PURE__*/
      React.createElement("thead", null, /*#__PURE__*/
      React.createElement("tr", null, /*#__PURE__*/
      React.createElement("th", null, "Name"), /*#__PURE__*/
      React.createElement("th", null, "Price"))), /*#__PURE__*/


      React.createElement("tbody", null, rows)));


  }}


class SearchBar extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("form", null, /*#__PURE__*/
      React.createElement("input", { type: "text", placeholder: "Search..." }), /*#__PURE__*/
      React.createElement("p", null, /*#__PURE__*/
      React.createElement("input", { type: "checkbox" }),
      ' ', "Only show products in stock")));




  }}


class FilterableProductTable extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement(SearchBar, null), /*#__PURE__*/
      React.createElement(ProductTable, { products: this.props.products })));


  }}



const PRODUCTS = [
{ category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
{ category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
{ category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
{ category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
{ category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
{ category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }];




