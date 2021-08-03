<template>

    <div class="layout-topbar p-d-flex p-shadow-3  p-jc-between  p-ai-center">
        <div class="logo-link">
            <router-link to="/" class="logo p-d-flex p-ai-center">
                <img alt="logo" src="./assets/logo.png">
                <div class="p-text-bold p-text-uppercase">Amba Twitter Analysis</div>
            </router-link>
        </div>

        <Menubar :model="items">
            <template #item="{item}">
                <router-link :to="item.to" class="p-d-flex p-ai-center p-menuitem-link">
                    <span class="p-menuitem-text">{{item.label}}</span>
                </router-link>
            </template>
        </Menubar>
    </div>

    <div class="layout-content">
        <router-view/>
    </div>
</template>


<script>
    export default {
        created() {
            this.$router.options.routes.forEach(route => {
                this.items.push({
                    label: route.name,
                    to: route.path,
                    icon: route.icon
                })
            })
            // console.log(this.items)
        },
        data() {
            return {
                items: []
            }
        }
    }
</script>

<style lang="scss">
    body {
        margin: 0;
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
        background-color: var(--surface-b);
        font-family: var(--font-family);
        font-weight: 400;
        color: var(--text-color);
    }

    .layout-topbar {
        box-shadow: 0 0 4px rgba(0, 0, 0, .25);
        border-bottom: 1px solid var(--surface-d);
        background-color: var(--surface-a);
        height: 70px;
        padding: 0 10px;

        .p-menubar {
            height: 60px;
            border: none;

            .p-menuitem {
                .router-link-active {
                    background: var(--surface-b);
                    border-radius: 4px;
                }
            }
        }

        .logo-link {
            padding: 5px;

            a {
                padding: 14px;
                color: var(--text-color);
                text-decoration: none;

                &:hover {
                    background: rgba(255, 255, 255, 0.04);
                    border-radius: 4px;
                }
            }

            div {
                padding-left: 10px;
                color: var(--text-color);
                font-size: 1.2em;
            }


            img {
                height: 1.5em;
                width: 1.5em;
            }
        }

    }

    .layout-content {
        padding: 1em;

        .p-card {
            padding: 1em;
        }
    }
</style>
