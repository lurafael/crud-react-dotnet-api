import React, { Component } from 'react';

class Body extends Component {
  render() {
    return (
      <main>
        <div class="bd-masthead mb-3" id="content">
          <div class="container px-4 px-md-3">
            <div class="row align-items-lg-center">
              <div class="col-8 mx-auto col-md-4 order-md-2 col-lg-5"></div>
              <div class="col-md-8 order-md-1 col-lg-7 text-center text-md-start">
                <h1 class="mb-3">An application created in ReactJS and .NET Core API</h1>

                <div class="d-flex flex-column flex-md-row">
                  <a href="/clients" class="btn btn-lg btn-bd-primary mb-3 me-md-3">Register Customers</a>
                </div>
                <p class="text-muted mb-0">
                  Currently <strong>v0.0.1</strong>
                  <span class="px-1">·</span>
                  <a href="/docs/versions/" class="link-secondary">Previous releases</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Body;
