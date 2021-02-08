<template>
    <div>
        <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" dark v-bind="attrs" v-on="on" style="width:35%">
                    {{btnText}}
                </v-btn>
            </template>
        <v-card>
            <v-card-title>
                <span class="headline">{{spanText}}</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field label="Name" required v-model="name"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field label="Code" required v-model="code"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field type="number" label="Weight" required v-model="weight"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field type="number" label="Price" v-model="price" required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field label="Color" type="text" v-model="color" required></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog = false">Inchide</v-btn>
                    <v-btn color="blue darken-1" text @click="onSubmit">Salveaza</v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "PopUp",
    props:["btnText","spanText", "_id"],
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
    methods:{
        ...mapActions(["editProduct", "addProduct"]),
        onSubmit(e){
            e.preventDefault(e);

            const product = {
                _id : this._id,
                name: this.name,
                code :this.code,
                weight: this.weight,
                price : this.price,
                color : this.color
            }

            if(this.btnText === "Editeaza"){
                this.editProduct(product);
            } else {
                this.addProduct(product);
            }

            this.dialog = false;
        }
    }
    
}
</script>

<style scoped>

</style>