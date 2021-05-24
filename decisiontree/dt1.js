$(".decisionTree").decisionTree({

    // folder to locate JSON files, default is the same folder as the HTML page
    data_folder: '/wp-content/themes/UCF-Connect-Child-Theme/decisiontree/',

    // prefix for question nodes
    node_prefix: 'dtn',

    // file extension for JSON requests
    json_ext: 'json',

    // cache JSON responses
    cache_json: false,

    // text for the 'Loading' overlay
    loading_text: 'Loading...',

    // location of the 'progress' animated GIF
    loading_gif: "/wp-content/themes/UCF-Connect-Child-Theme/decisiontree/img/loading.gif",

    // speed of transitions and effects
    animation_speed: 600,

    // show additional copy on node questions
    question_extra_text: true,

    // hide the content used to introduce the decision tree
    hide_original_content: true,

    // make the headline of answer nodes a link
    answer_link: true,

    // target for the answer node link
    answer_target: "_blank"

});