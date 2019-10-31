import React from 'react';

const PosProducts = () => {

  return (
    <div id="pos--list" class="d-flex flex-column col-6 col-sm-7 col-md-8 col-lg-9 h-100">
      <div class="d-flex py-3">
        <button type="button" class="btn btn-white mr-2">
          <i class="simple-icon-arrow-left"></i>
        </button>
        <div class="search flex-grow-1" data-search-path="">
          <input name="searchKeyword" id="searchKeyword" placeholder="Buscar producto" type="search"
            class="form-control" value="" />
            <span class="search-icon">
              <i class="simple-icon-magnifier"></i>
            </span>
        </div>
          <button type="button" class="btn btn-white btn-lg d-none d-md-block ml-2">
            <i class="simple-icon-list"></i>
          </button>
          <button type="button" class="btn btn-white btn-lg d-none d-md-block ml-1">
            <i class="simple-icon-grid"></i>
          </button>
        </div>
        <div class="flex-shrink-0">
          <div id="grid-list" class="d-none d-md-block">
            <div class="container-fluid">
              <div class="row">
                <!-- Card -->
                    <div class="col-sm-6 col-md-4 col-lg-3">
                  <div class="card text-white">
                    <div class="position-relative">
                      <a class="w-40 w-sm-100" href="">
                        <img alt="" src="images/pizza-min.jpg" class="card-img" />
                                </a>
                        <span
                          class="position-absolute badge-top-right badge badge-primary badge-pill">
                          Clasica
                                </span>
                            </div>
                      <div class="card-img-overlay">
                        <div class="card-title">Jamón</div>
                        <i class="simple-icon-layers"></i>
                      </div>
                    </div>
                  </div>
                  <!-- EOF - Card -->
                    <!-- Card -->
                    <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="card text-white">
                      <div class="position-relative">
                        <a class="w-40 w-sm-100" href="">
                          <img alt="" src="images/pizza-min.jpg" class="card-img">
                                </a>
                          <span
                            class="position-absolute badge-top-right badge badge-primary badge-pill">
                            Clasica
                                </span>
                            </div>
                        <div class="card-img-overlay">
                          <div class="card-title">Hawaiana Jamón y queso</div>
                          <i class="simple-icon-layers"></i>
                        </div>
                      </div>
                    </div>
                    <!-- EOF - Card -->
                    <!-- Card -->
                    <div class="col-sm-6 col-md-4 col-lg-3">
                      <div class="card text-white">
                        <div class="position-relative">
                          <a class="w-40 w-sm-100" href="">
                            <img alt="" src="images/pizza-min.jpg" class="card-img">
                                </a>
                            <span
                              class="position-absolute badge-top-right badge badge-primary badge-pill">
                              Clasica
                                </span>
                            </div>
                          <div class="card-img-overlay">
                            <div class="card-title">Pollo con champiñones</div>
                            <i class="simple-icon-layers"></i>
                          </div>
                        </div>
                      </div>
                      <!-- EOF - Card -->
                    <!-- Card -->
                    <div class="col-sm-6 col-md-4 col-lg-3">
                        <div class="card text-white">
                          <div class="position-relative">
                            <a class="w-40 w-sm-100" href="">
                              <img alt="" src="images/pizza-min.jpg" class="card-img">
                                </a>
                              <span
                                class="position-absolute badge-top-right badge badge-primary badge-pill">
                                Clasica
                                </span>
                            </div>
                            <div class="card-img-overlay">
                              <div class="card-title">Margarita</div>
                              <p class="text-truncate">Tomate, albahaca y aceite de oliva</p>
                              <i class="simple-icon-layers"></i>
                            </div>
                          </div>
                        </div>
                        <!-- EOF - Card -->
                    <!-- Card -->
                    <div class="col-sm-6 col-md-4 col-lg-3">
                          <div class="card text-white">
                            <div class="position-relative">
                              <a class="w-40 w-sm-100" href="">
                                <img alt="" src="images/pizza-min.jpg" class="card-img">
                                </a>
                                <span
                                  class="position-absolute badge-top-right badge badge-primary badge-pill">
                                  Clasica
                                </span>
                            </div>
                              <div class="card-img-overlay">
                                <div class="card-title">Napolitana</div>
                                <p class="text-truncate">Tomate y orégano</p>
                                <i class="simple-icon-layers"></i>
                              </div>
                            </div>
                          </div>
                          <!-- EOF - Card -->
                    <!-- Card -->
                    <div class="col-sm-6 col-md-4 col-lg-3">
                            <div class="card text-white">
                              <div class="position-relative">
                                <a class="w-40 w-sm-100" href="">
                                  <img alt="" src="images/pizza-min.jpg" class="card-img">
                                </a>
                                  <span
                                    class="position-absolute badge-top-right badge badge-color-4 badge-pill">
                                    Especial
                                </span>
                            </div>
                                <div class="card-img-overlay">
                                  <div class="card-title">Feliz</div>
                                  <p class="text-truncate">Maduro, tocineta y queso parmessano</p>
                                  <i class="simple-icon-layers"></i>
                                </div>
                              </div>
                            </div>
                            <!-- EOF - Card -->
                    <!-- Card -->
                    <div class="col-sm-6 col-md-4 col-lg-3">
                              <div class="card text-white">
                                <div class="position-relative">
                                  <a class="w-40 w-sm-100" href="">
                                    <img alt="" src="images/pizza-min.jpg" class="card-img">
                                </a>
                                    <span
                                      class="position-absolute badge-top-right badge badge-color-4 badge-pill">
                                      Especial
                                </span>
                            </div>
                                  <div class="card-img-overlay">
                                    <div class="card-title">Carcajada</div>
                                    <p class="text-truncate">Pollo, tomate y tocineta</p>
                                    <i class="simple-icon-layers"></i>
                                  </div>
                                </div>
                              </div>
                              <!-- EOF - Card -->
                    <!-- Card -->
                    <div class="col-sm-6 col-md-4 col-lg-3">
                                <div class="card text-white">
                                  <div class="position-relative">
                                    <a class="w-40 w-sm-100" href="">
                                      <img alt="" src="images/pizza-min.jpg" class="card-img">
                                </a>
                                      <span
                                        class="position-absolute badge-top-right badge badge-color-4 badge-pill">
                                        Especial
                                </span>
                            </div>
                                    <div class="card-img-overlay">
                                      <div class="card-title">Jovial</div>
                                      <p class="text-truncate">Pollo, champiñones y maduro</p>
                                      <i class="simple-icon-layers"></i>
                                    </div>
                                  </div>
                                </div>
                                <!-- EOF - Card -->
                </div>
                            </div>

                          </div>
                          <div id="thumb-list" class="d-md-none">
                            <!-- List Item -->
            <div class="mb-3 col-12 px-0">
                              <a href="#">
                                <div class="d-flex flex-row card">
                                  <img alt="" src="images/pizza-min.jpg"
                                    class="list-thumbnail border-0 card-img-left">
                                    <div class="pl-2">
                                      <div class="card-body d-flex align-items-center h-100">
                                        <div class="list-item-heading truncate">Jamón</div>
                                        <span
                                          class="badge badge-secondary badge-pill d-none d-sm-block">Clasica</span>
                                      </div>
                                    </div>
                    </div>
                </a>
            </div>
                              <!-- EOF - List Item -->
            <!-- List Item -->
            <div class="mb-3 col-12 px-0">
                                <a href="#">
                                  <div class="d-flex flex-row card">
                                    <img alt="" src="images/pizza-min.jpg"
                                      class="list-thumbnail border-0 card-img-left">
                                      <div class="pl-2">
                                        <div class="card-body d-flex align-items-center h-100">
                                          <div class="list-item-heading truncate">Hawaiana Jamón y queso</div>
                                          <span
                                            class="badge badge-secondary badge-pill d-none d-sm-block">Clasica</span>
                                        </div>
                                      </div>
                    </div>
                </a>
            </div>
                                <!-- EOF - List Item -->
            <!-- List Item -->
            <div class="mb-3 col-12 px-0">
                                  <a href="#">
                                    <div class="d-flex flex-row card">
                                      <img alt="" src="images/pizza-min.jpg"
                                        class="list-thumbnail border-0 card-img-left">
                                        <div class="pl-2">
                                          <div class="card-body d-flex align-items-center h-100">
                                            <div class="list-item-heading truncate">Pollo con champiñones</div>
                                            <span
                                              class="badge badge-secondary badge-pill d-none d-sm-block">Clasica</span>
                                          </div>
                                        </div>
                    </div>
                </a>
            </div>
                                  <!-- EOF - List Item -->
            <!-- List Item -->
            <div class="mb-3 col-12 px-0">
                                    <a href="#">
                                      <div class="d-flex flex-row card">
                                        <img alt="" src="images/pizza-min.jpg"
                                          class="list-thumbnail border-0 card-img-left">
                                          <div class="pl-2">
                                            <div class="card-body d-flex align-items-center h-100">
                                              <div class="list-item-heading truncate">Tomate, albahaca y aceite de
                                    oliva</div>
                                              <span
                                                class="badge badge-secondary badge-pill d-none d-sm-block">Clasica</span>
                                            </div>
                                          </div>
                    </div>
                </a>
            </div>
                                    <!-- EOF - List Item -->
            <!-- List Item -->
            <div class="mb-3 col-12 px-0">
                                      <a href="#">
                                        <div class="d-flex flex-row card">
                                          <img alt="" src="images/pizza-min.jpg"
                                            class="list-thumbnail border-0 card-img-left">
                                            <div class="pl-2">
                                              <div class="card-body d-flex align-items-center h-100">
                                                <div class="list-item-heading truncate">Napolitana</div>
                                                <span
                                                  class="badge badge-secondary badge-pill d-none d-sm-block">Clasica</span>
                                              </div>
                                            </div>
                    </div>
                </a>
            </div>
                                      <!-- EOF - List Item -->
            <!-- List Item -->
            <div class="mb-3 col-12 px-0">
                                        <a href="#">
                                          <div class="d-flex flex-row card">
                                            <img alt="" src="images/pizza-min.jpg"
                                              class="list-thumbnail border-0 card-img-left">
                                              <div class="pl-2">
                                                <div class="card-body d-flex align-items-center h-100">
                                                  <div class="list-item-heading truncate">Feliz</div>
                                                  <span
                                                    class="badge badge-color-4 badge-pill d-none d-sm-block">Especial</span>
                                                </div>
                                              </div>
                    </div>
                </a>
            </div>
                                        <!-- EOF - List Item -->
        </div>
                                    </div>
                                    <div id="nav-categories" class="mt-auto py-3">
                                      <div class="container d-flex justify-content-center">
                                        <span class="font-weight-bold">PIZZAS</span>
                                      </div>
                                    </div>
                                  </div>
                                  )
}