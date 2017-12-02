<template>
  <div>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
              <div class="dropdown-menu" aria-labelledby="dropdown01">
                <a class="dropdown-item" href="#">ActionH</a>
                <a class="dropdown-item" href="#">Another action-H</a>
                <a class="dropdown-item" href="#">Something else here-H</a>
              </div>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>

    <div class="Component2">
      <div class="container">
        <div class="row">

            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
              <div class="list-group dropdown">
                <h4 class="dropdown-header">Make Temple Selection
                  <span class="badge badge-primary badge-pill">140</span>
                </h4>
                <!-- <a href="#" class="list-group-item list-group-item-action active">Make Selection
                  <span class="badge badge-primary badge-pill">140</span>
                </a> -->

                <div class="btn-group">
                  <button class="btn btn-primary dropdown-toggle dropdown-toggle-split list-group-item list-group-item-action " type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Selection Class 1
                  </button>
                  <!-- <button class="btn btn-primary list-group-item list-group-item-action " type="button" >
                    Selection Class 1
                  </button>
                  <button class="btn btn-primary dropdown-toggle dropdown-toggle-split list-group-item list-group-item-action " type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="sr-only">Toggle Dropdown</span>
                  </button> -->

                  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <button class="dropdown-item" type="button">Select All</button>
                    <div class="dropdown-divider"></div>
                    <button class="dropdown-item" type="button">Action1</button>
                    <button class="dropdown-item" type="button">Another action1</button>
                    <button class="dropdown-item" type="button">Something else here1</button>
                  </div>
                </div>
                <div class="btn-group">
                  <button class="btn btn-primary dropdown-toggle list-group-item list-group-item-action " type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Selection Class 2
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <button class="dropdown-item" type="button">Select All</button>
                    <div class="dropdown-divider"></div>
                    <button class="dropdown-item" type="button">Action2</button>
                    <button class="dropdown-item" type="button">Another Action2</button>
                    <button class="dropdown-item" type="button">Something else here2</button>
                  </div>

                </div>

                <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
                <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
                <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
                <a href="#" class="list-group-item list-group-item-action disabled">Vestibulum at eros</a>
              </div>
            </div>
            <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">
              <div class="Component3centre">
                <ul class="nav nav-tabs">
                  <li class="nav-item">
                    <a class="nav-link active" href="#">Intro</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Maps</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Temples</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Gurus</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Songs</a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                  </li>
                </ul>

                <h3> Here goes the content</h3>

              </div>

            </div>

        </div>
      </div>

    </div>
  </div>

</template>

<script>
  export default {
    components: {
    }
  }
</script>
<style src="./css/Component2.css"></style>
