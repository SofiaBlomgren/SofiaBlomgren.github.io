const Show={

    props:["hash"],
    data(){ return {hashState:window.location.hash}; },
    created(){  
        this.listener=()=> this.hashState= window.location.hash; 
        window.addEventListener("hashchange", this.listener);
    },
    unmounted(){ window.removeEventListener("hashchange", this.listener); },
    render(){
        return (<div class={hashFunction(this)}> 
            {this.$slots.default()}
            </div>)
        
    }
}
function hashFunction(obj){
    if (obj.hashState != obj.hash) { return "hidden"} 
    else {return ""}
}