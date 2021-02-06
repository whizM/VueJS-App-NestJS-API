<template>
    <div id="form">
        <v-app id="inspire">
            <v-row justify="center">
                <v-dialog
                    v-model="dialog"
                    persistent
                    max-width="600px"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            color="primary"
                            dark
                            v-bind="attrs"
                            v-on="on"
                            style="width:20%"
                        >
                            Adauga Produs
                        </v-btn>
                    </template>
                <v-card>
                    <v-card-title>
                        <span class="headline">Adauga Informatiile Produsului</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col
                                cols="12"
                                sm="6"
                                md="4"
                                >
                                <v-text-field
                                    label="Name"
                                    required
                                    v-model="name"
                                ></v-text-field>
                                </v-col>
                                <v-col
                                cols="12"
                                sm="6"
                                md="4"
                                >
                                <v-text-field
                                    label="Code"
                                    required
                                    v-model="code"
                                ></v-text-field>
                                </v-col>
                                <v-col
                                cols="12"
                                sm="6"
                                md="4"
                                >
                                <v-text-field
                                    type="number"
                                    label="Weight"
                                    required
                                    v-model="weight"
                                ></v-text-field>
                                </v-col>
                                <v-col                                 
                                cols="12"
                                sm="6"
                                md="4">
                                <v-text-field
                                    type="number"
                                    label="Price"
                                    v-model="price"
                                    required
                                ></v-text-field>
                                </v-col>
                                <v-col                                 
                                cols="12"
                                sm="6"
                                md="4">
                                <v-text-field
                                    label="Color"
                                    type="text"
                                    v-model="color"
                                    required
                                ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                        color="blue darken-1"
                        text
                        @click="dialog = false"
                        >
                        Close
                        </v-btn>
                        <v-btn
                        color="blue darken-1"
                        text
                        @click="onSubmit"
                        >
                        Create
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            </v-row>
        </v-app>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name:"Form",
    data() {
        return {
            name: "",
            code: "",
            weight: 0,
            price: 0,
            color: "",
            dialog: false
        }
    },
    methods: {
        ...mapActions(["addProduct", "revertShowDialog", "editProduct", "getProductId"]),
        async onSubmit(e){
            e.preventDefault();

              const product = {
                name: this.name,
                code :this.code,
                weight: this.weight,
                price : this.price,
                color : this.color
              }

            const id = await this.getProductId();

            if(id === ""){
              this.addProduct(product);
            } else {
              product["id"] = id;
              this.editProduct(product);
            }

            this.$set(this.$data, 'dialog', false);
        },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>