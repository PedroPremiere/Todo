'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">back documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-d72c236356dd67941712afdaa90f6e427ecd3a204e4821a9d53e6072459718739b3aa90fb5d403bdb6e0e65395265a42fb6fe9f0991c0903695bd018f10c723c"' : 'data-bs-target="#xs-controllers-links-module-AppModule-d72c236356dd67941712afdaa90f6e427ecd3a204e4821a9d53e6072459718739b3aa90fb5d403bdb6e0e65395265a42fb6fe9f0991c0903695bd018f10c723c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-d72c236356dd67941712afdaa90f6e427ecd3a204e4821a9d53e6072459718739b3aa90fb5d403bdb6e0e65395265a42fb6fe9f0991c0903695bd018f10c723c"' :
                                            'id="xs-controllers-links-module-AppModule-d72c236356dd67941712afdaa90f6e427ecd3a204e4821a9d53e6072459718739b3aa90fb5d403bdb6e0e65395265a42fb6fe9f0991c0903695bd018f10c723c"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-d72c236356dd67941712afdaa90f6e427ecd3a204e4821a9d53e6072459718739b3aa90fb5d403bdb6e0e65395265a42fb6fe9f0991c0903695bd018f10c723c"' : 'data-bs-target="#xs-injectables-links-module-AppModule-d72c236356dd67941712afdaa90f6e427ecd3a204e4821a9d53e6072459718739b3aa90fb5d403bdb6e0e65395265a42fb6fe9f0991c0903695bd018f10c723c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-d72c236356dd67941712afdaa90f6e427ecd3a204e4821a9d53e6072459718739b3aa90fb5d403bdb6e0e65395265a42fb6fe9f0991c0903695bd018f10c723c"' :
                                        'id="xs-injectables-links-module-AppModule-d72c236356dd67941712afdaa90f6e427ecd3a204e4821a9d53e6072459718739b3aa90fb5d403bdb6e0e65395265a42fb6fe9f0991c0903695bd018f10c723c"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CreateService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HealthModule.html" data-type="entity-link" >HealthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-HealthModule-79f43921e59cba4b90757d3b067e63b58ab9b0deb617e8915345460e2b04eb3d01f7ebf55297c990c6c205b3149468aeec43696ef0f29b5581437545a9ade174"' : 'data-bs-target="#xs-controllers-links-module-HealthModule-79f43921e59cba4b90757d3b067e63b58ab9b0deb617e8915345460e2b04eb3d01f7ebf55297c990c6c205b3149468aeec43696ef0f29b5581437545a9ade174"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-HealthModule-79f43921e59cba4b90757d3b067e63b58ab9b0deb617e8915345460e2b04eb3d01f7ebf55297c990c6c205b3149468aeec43696ef0f29b5581437545a9ade174"' :
                                            'id="xs-controllers-links-module-HealthModule-79f43921e59cba4b90757d3b067e63b58ab9b0deb617e8915345460e2b04eb3d01f7ebf55297c990c6c205b3149468aeec43696ef0f29b5581437545a9ade174"' }>
                                            <li class="link">
                                                <a href="controllers/HealthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-HealthModule-79f43921e59cba4b90757d3b067e63b58ab9b0deb617e8915345460e2b04eb3d01f7ebf55297c990c6c205b3149468aeec43696ef0f29b5581437545a9ade174"' : 'data-bs-target="#xs-injectables-links-module-HealthModule-79f43921e59cba4b90757d3b067e63b58ab9b0deb617e8915345460e2b04eb3d01f7ebf55297c990c6c205b3149468aeec43696ef0f29b5581437545a9ade174"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HealthModule-79f43921e59cba4b90757d3b067e63b58ab9b0deb617e8915345460e2b04eb3d01f7ebf55297c990c6c205b3149468aeec43696ef0f29b5581437545a9ade174"' :
                                        'id="xs-injectables-links-module-HealthModule-79f43921e59cba4b90757d3b067e63b58ab9b0deb617e8915345460e2b04eb3d01f7ebf55297c990c6c205b3149468aeec43696ef0f29b5581437545a9ade174"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaIndicatorService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaIndicatorService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TodoModule.html" data-type="entity-link" >TodoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TodoModule-3e05deeb294100fcf1bfe8344edf677057c67bc3a48da843667e0353ef4496d5927fea300c4118bcfea89f894ab4b2d693c10e8672579fd7746cee8c1447bad6"' : 'data-bs-target="#xs-controllers-links-module-TodoModule-3e05deeb294100fcf1bfe8344edf677057c67bc3a48da843667e0353ef4496d5927fea300c4118bcfea89f894ab4b2d693c10e8672579fd7746cee8c1447bad6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TodoModule-3e05deeb294100fcf1bfe8344edf677057c67bc3a48da843667e0353ef4496d5927fea300c4118bcfea89f894ab4b2d693c10e8672579fd7746cee8c1447bad6"' :
                                            'id="xs-controllers-links-module-TodoModule-3e05deeb294100fcf1bfe8344edf677057c67bc3a48da843667e0353ef4496d5927fea300c4118bcfea89f894ab4b2d693c10e8672579fd7746cee8c1447bad6"' }>
                                            <li class="link">
                                                <a href="controllers/CreateController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/DeleteController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeleteController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/EditController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/IndexController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IndexController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/ShowController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShowController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TodoModule-3e05deeb294100fcf1bfe8344edf677057c67bc3a48da843667e0353ef4496d5927fea300c4118bcfea89f894ab4b2d693c10e8672579fd7746cee8c1447bad6"' : 'data-bs-target="#xs-injectables-links-module-TodoModule-3e05deeb294100fcf1bfe8344edf677057c67bc3a48da843667e0353ef4496d5927fea300c4118bcfea89f894ab4b2d693c10e8672579fd7746cee8c1447bad6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TodoModule-3e05deeb294100fcf1bfe8344edf677057c67bc3a48da843667e0353ef4496d5927fea300c4118bcfea89f894ab4b2d693c10e8672579fd7746cee8c1447bad6"' :
                                        'id="xs-injectables-links-module-TodoModule-3e05deeb294100fcf1bfe8344edf677057c67bc3a48da843667e0353ef4496d5927fea300c4118bcfea89f894ab4b2d693c10e8672579fd7746cee8c1447bad6"' }>
                                        <li class="link">
                                            <a href="injectables/CreateService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DeleteService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeleteService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/EditService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/IndexService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IndexService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ShowService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShowService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CreateController.html" data-type="entity-link" >CreateController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DeleteController.html" data-type="entity-link" >DeleteController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/EditController.html" data-type="entity-link" >EditController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/HealthController.html" data-type="entity-link" >HealthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/IndexController.html" data-type="entity-link" >IndexController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ShowController.html" data-type="entity-link" >ShowController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AbstractFactory.html" data-type="entity-link" >AbstractFactory</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTodoTdo.html" data-type="entity-link" >CreateTodoTdo</a>
                            </li>
                            <li class="link">
                                <a href="classes/TodoFactory.html" data-type="entity-link" >TodoFactory</a>
                            </li>
                            <li class="link">
                                <a href="classes/TodoTdo.html" data-type="entity-link" >TodoTdo</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CreateService.html" data-type="entity-link" >CreateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DeleteService.html" data-type="entity-link" >DeleteService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EditService.html" data-type="entity-link" >EditService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FactoryService.html" data-type="entity-link" >FactoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/IndexService.html" data-type="entity-link" >IndexService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaIndicatorService.html" data-type="entity-link" >PrismaIndicatorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ShowService.html" data-type="entity-link" >ShowService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});