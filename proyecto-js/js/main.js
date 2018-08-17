$(document).ready(function(){

    console.log("Estamos listos");
    
    //SLIDER
    $(function(){
        $('.galeria').bxSlider({
          mode: 'fade',
          captions: true,
          slideWidth: 1200,
        });
      });
    
    //POSTS
    var post = [
        {
            title: "Prueba de titulo",
            date: "Publicado el dia "+ moment().format("dddd")+" del mes "+moment().format("MMMM")+" de "+moment().format("YYYY"), 
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada massa odio, venenatis lacinia mi aliquet non. Sed hendrerit hendrerit mauris vel facilisis. Pellentesque sollicitudin sed lacus et tristique. Nam iaculis posuere risus, et finibus justo congue ac. Donec consequat suscipit blandit. Duis lacinia elit id dui dignissim pulvinar. Etiam lobortis tortor eget fermentum tincidunt. Ut tempus mauris quis tortor rhoncus dapibus. Integer sit amet nisl et lectus placerat eleifend vitae vel sem. Nunc orci nisi, blandit vitae mi finibus, feugiat luctus libero. Etiam eleifend, odio eget cursus lacinia, tellus turpis tincidunt lacus, id congue massa erat ac magna. Pellentesque consequat, est non dignissim posuere, libero purus feugiat lectus, eu dictum velit nulla sed neque. Curabitur volutpat non mauris quis maximus. Nam vel aliquam sapien. Praesent semper blandit eros ut faucibus. Phasellus nec lectus tortor. Nunc aliquam rhoncus lobortis."

        },
        {
            title: "Prueba de titulo 2",
            date: "Publicado el dia "+ moment().date()+" del mes "+moment().format("MMMM")+" de "+moment().format("YYYY"), 
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada massa odio, venenatis lacinia mi aliquet non. Sed hendrerit hendrerit mauris vel facilisis. Pellentesque sollicitudin sed lacus et tristique. Nam iaculis posuere risus, et finibus justo congue ac. Donec consequat suscipit blandit. Duis lacinia elit id dui dignissim pulvinar. Etiam lobortis tortor eget fermentum tincidunt. Ut tempus mauris quis tortor rhoncus dapibus. Integer sit amet nisl et lectus placerat eleifend vitae vel sem. Nunc orci nisi, blandit vitae mi finibus, feugiat luctus libero. Etiam eleifend, odio eget cursus lacinia, tellus turpis tincidunt lacus, id congue massa erat ac magna. Pellentesque consequat, est non dignissim posuere, libero purus feugiat lectus, eu dictum velit nulla sed neque. Curabitur volutpat non mauris quis maximus. Nam vel aliquam sapien. Praesent semper blandit eros ut faucibus. Phasellus nec lectus tortor. Nunc aliquam rhoncus lobortis."

        },
        {
            title: "Prueba de titulo 3",
            date: moment().format("MMMM Do YYYY"),
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada massa odio, venenatis lacinia mi aliquet non. Sed hendrerit hendrerit mauris vel facilisis. Pellentesque sollicitudin sed lacus et tristique. Nam iaculis posuere risus, et finibus justo congue ac. Donec consequat suscipit blandit. Duis lacinia elit id dui dignissim pulvinar. Etiam lobortis tortor eget fermentum tincidunt. Ut tempus mauris quis tortor rhoncus dapibus. Integer sit amet nisl et lectus placerat eleifend vitae vel sem. Nunc orci nisi, blandit vitae mi finibus, feugiat luctus libero. Etiam eleifend, odio eget cursus lacinia, tellus turpis tincidunt lacus, id congue massa erat ac magna. Pellentesque consequat, est non dignissim posuere, libero purus feugiat lectus, eu dictum velit nulla sed neque. Curabitur volutpat non mauris quis maximus. Nam vel aliquam sapien. Praesent semper blandit eros ut faucibus. Phasellus nec lectus tortor. Nunc aliquam rhoncus lobortis."

        },
        {
            title: "Prueba de titulo 4",
            date: moment().format("MMMM Do YYYY"),
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada massa odio, venenatis lacinia mi aliquet non. Sed hendrerit hendrerit mauris vel facilisis. Pellentesque sollicitudin sed lacus et tristique. Nam iaculis posuere risus, et finibus justo congue ac. Donec consequat suscipit blandit. Duis lacinia elit id dui dignissim pulvinar. Etiam lobortis tortor eget fermentum tincidunt. Ut tempus mauris quis tortor rhoncus dapibus. Integer sit amet nisl et lectus placerat eleifend vitae vel sem. Nunc orci nisi, blandit vitae mi finibus, feugiat luctus libero. Etiam eleifend, odio eget cursus lacinia, tellus turpis tincidunt lacus, id congue massa erat ac magna. Pellentesque consequat, est non dignissim posuere, libero purus feugiat lectus, eu dictum velit nulla sed neque. Curabitur volutpat non mauris quis maximus. Nam vel aliquam sapien. Praesent semper blandit eros ut faucibus. Phasellus nec lectus tortor. Nunc aliquam rhoncus lobortis."

        },
        {
            title: "Prueba de titulo 5",
            date: moment().format("MMMM Do YYYY"),
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada massa odio, venenatis lacinia mi aliquet non. Sed hendrerit hendrerit mauris vel facilisis. Pellentesque sollicitudin sed lacus et tristique. Nam iaculis posuere risus, et finibus justo congue ac. Donec consequat suscipit blandit. Duis lacinia elit id dui dignissim pulvinar. Etiam lobortis tortor eget fermentum tincidunt. Ut tempus mauris quis tortor rhoncus dapibus. Integer sit amet nisl et lectus placerat eleifend vitae vel sem. Nunc orci nisi, blandit vitae mi finibus, feugiat luctus libero. Etiam eleifend, odio eget cursus lacinia, tellus turpis tincidunt lacus, id congue massa erat ac magna. Pellentesque consequat, est non dignissim posuere, libero purus feugiat lectus, eu dictum velit nulla sed neque. Curabitur volutpat non mauris quis maximus. Nam vel aliquam sapien. Praesent semper blandit eros ut faucibus. Phasellus nec lectus tortor. Nunc aliquam rhoncus lobortis."

        },
    ];
   
    post.forEach((item, index)=>{
        var post = `
            <article class = "posts">
                <h2>${item.title}</h2>
                <span class = "date">${item.date}</span>
                <p>${item.content}</p>
                <a href ="#" class ="button-more">Leer más</a>
            </article>
        `;
        console.log(post);
        $("#posts").append(post);
    });

});
