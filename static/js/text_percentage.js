function draw_text_percent(proba_x,proba_c){
    data = [`The model predicts a probability of ${Math.round(proba_x*100)}% for the positive class on real data.`,
    `The model predicts a probability of ${Math.round(proba_c*100)}% for the positive class on counterfactual data.`]
d3.select("#text-display")
        .selectAll("p")
        .data(data)
        .enter()
        .append("p")
        .text(function(d){return d;});

}
/*
function draw_text_percent(result){
    d3.select("#text-display")
            .append("p")
            .text(`Le modèle prédit une probabilité de rester client de ${Math.round(result*100)}%`)
    
    }*/