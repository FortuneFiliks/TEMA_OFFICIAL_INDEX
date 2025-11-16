// let get_Menu = querySelector();
// let get_Mobile_Menu = querySelector("");


$(".menu").toggle(view_Menu, close_Menu);

function view_Menu(){
	$(".mobile_menu_section").css({"display":"block"});
	$(":root").css({"overflow-y":"hidden"});
}

function close_Menu(){
	
	$(".mobile_menu_section").css({"display":"none"});
	$(":root").css({"overflow-y":"visible"});
}




//SECOND SECTION ANIMATION 


const get_Second_Section_Img = document.querySelector(".problem_img");

function animate_Second_Section_Img(entries){
	entries.forEach( (entry) => {
		if(entry.isIntersecting){
			entry.target.classList.add("animate_second_section_img_class");
			observer.unobserve(entry.target);
		}
	});
	
}


const animate_Second_Section_Img_Root = 
{
	root : null,
	rootMargin : "0px",
	threshold : 0.6,
	
}

const animate_Second_Section_Img_API = new IntersectionObserver(animate_Second_Section_Img, animate_Second_Section_Img_Root);

animate_Second_Section_Img_API.observe(get_Second_Section_Img);


const get_Second_Section_Img_2 = document.querySelector(".problem_img_2");

function animate_Second_Section_Img_2(entries){
	entries.forEach( (entry) => {
		if(entry.isIntersecting){
			entry.target.classList.add("problem_img_2_animation_class");
			observer.unobserve(entry.target);
		}
	});
	
}


const animate_Second_Section_Img_Root_2 = 
{
	root : null,
	rootMargin : "0px",
	threshold : 0.6,
	
}

const animate_Second_Section_Img_API_2 = new IntersectionObserver(animate_Second_Section_Img_2, animate_Second_Section_Img_Root_2);

animate_Second_Section_Img_API_2.observe(get_Second_Section_Img_2);




let slide_Index = 1;

show_Slides(slide_Index);


function plus_Slide(n){
	show_Slides(slide_Index += n);
}

function show_Slides(n){
	let get_Fourth_Section_Slide_Item = document.getElementsByClassName("fourth_section_slide_item");
	let i;
	
	if(n > get_Fourth_Section_Slide_Item.length){
		slide_Index = 1;
	}
	
	if(n < 1){
		slide_Index = get_Fourth_Section_Slide_Item.length;
	}
	
	for(i = 0; i < get_Fourth_Section_Slide_Item.length; i++){
		get_Fourth_Section_Slide_Item[i].style.display = "none";
	}
	
	get_Fourth_Section_Slide_Item[slide_Index - 1].style.display = "inline-block";
}





//TEXT ANIMATION


const ecotourism_Text = document.querySelectorAll(".left_flex_item,.text_flex_item,.first_review_text, .second_review_text, .third_review_text");



function animate_Ecotourism_Text(entries, target){
    entries.forEach(
	    (entry) => {
            if(entry.isIntersecting){
			    entry.target.classList.add("char_animated");
				observer.unobserve(target);
			}

		});
}


const animate_Ecotourism_Text_Root = 
{
	root : null,
	rootMargin : "0px",
	threshold : 0.3,
	
}


const observe_Ecotourism_Text = new IntersectionObserver(animate_Ecotourism_Text, animate_Ecotourism_Text_Root);
ecotourism_Text.forEach((target) => observe_Ecotourism_Text.observe(target));







//THIRD SECTION ANIMATION


const get_Third_Section_First_Flex = document.querySelector(".third_section_first_flex");

function third_Section_First_Flex_Animation(entries){
	entries.forEach( (entry) => {
		if(entry.isIntersecting){
			entry.target.classList.add("third_section_first_flex_animation_class");
			observer.unobserve(entry.target);
		}
	});
}



const third_Section_Flex_Animation_Root = 
{
    root : null,
    rootMargin : "0px",
    threshold : 0.6,
}


const third_Section_First_Flex_Animation_API = new IntersectionObserver(third_Section_First_Flex_Animation, third_Section_Flex_Animation_Root);

third_Section_First_Flex_Animation_API.observe(get_Third_Section_First_Flex);



const get_Third_Section_Second_Flex = document.querySelector(".third_section_second_flex");

function third_Section_Second_Flex_Animation(entries){
	entries.forEach( (entry) => {
		if(entry.isIntersecting){
			entry.target.classList.add("third_section_second_flex_animation_class");
			observer.unobserve(entry.target);
		}
	});
}


const third_Section_Second_Flex_Animation_API = new IntersectionObserver(third_Section_Second_Flex_Animation, third_Section_Flex_Animation_Root);

third_Section_Second_Flex_Animation_API.observe(get_Third_Section_Second_Flex);



//FOURTH SECTION ANIMATION

const get_Pharmacy_Img = document.querySelectorAll(".pharmacy_img, .eco_img");



function pharmacy_Img_Animation(entries){
	entries.forEach( (entry) => {
		if(entry.isIntersecting){
			entry.target.classList.add("pharmacy_img_animation_class");
			observer.unobserve(entry.target);
		}
	});
}

const pharmacy_Img_Animation_Root = 
{
	root : null,
	rootMargin : "0px",
	threshold : 0.6,
	
}


const pharmacy_Img_Animation_API = new IntersectionObserver(pharmacy_Img_Animation, pharmacy_Img_Animation_Root);

get_Pharmacy_Img.forEach( (target) => { pharmacy_Img_Animation_API.observe(target)});



const get_Pharmacy_Img_2 = document.querySelectorAll(".pharmacy_img_2, .eco_img_2");



function pharmacy_Img_2_Animation(entries){
	entries.forEach( (entry) => {
		if(entry.isIntersecting){
			entry.target.classList.add("pharmacy_img_2_animation_class");
			observer.unobserve(entry.target);
		}
	});
}

const pharmacy_Img_2_Animation_Root = 
{
	root : null,
	rootMargin : "0px",
	threshold : 0.6,
	
}


const pharmacy_Img_2_Animation_API = new IntersectionObserver(pharmacy_Img_2_Animation, pharmacy_Img_2_Animation_Root);

get_Pharmacy_Img_2.forEach( (target) => { pharmacy_Img_2_Animation_API.observe(target)});

















const get_First_Slide_Item = document.querySelectorAll(".first_slide_item, .second_slide_item");



function first_Slide_Item_Animation(entries){
	entries.forEach( (entry) => {
		if(entry.isIntersecting){
			entry.target.classList.add("first_slide_item_animation_class");
			observer.unobserve(entry.target);
		}
	});
}

const first_Slide_Item_Animation_Root = 
{
	root : null,
	rootMargin : "0px",
	threshold : 0.6,
	
}


const first_Slide_Item_Animation_API = new IntersectionObserver(first_Slide_Item_Animation, first_Slide_Item_Animation_Root);

get_First_Slide_Item.forEach( (target) => {first_Slide_Item_Animation_API.observe(target);});









//SEVENTH SECTION ANIMATION


const get_Sixth_Section_Text = document.querySelector(".sixth_section_right_flex_item");

function sixth_Section_Text_Animation(entries){
	entries.forEach( (entry) => {
		if(entry.isIntersecting){
		    entry.target.classList.add("sixth_section_animation_class");
		    obersver.unobserve(entry.target);
		}
		
	});
	
}

const sixth_Section_Text_Animation_Root = 
{
	root : null,
	rootMargin : "0px",
	threshold : 0.6,
	
}

const sixth_Section_Text_Animation_API = new IntersectionObserver(sixth_Section_Text_Animation, sixth_Section_Text_Animation_Root);

sixth_Section_Text_Animation_API.observe(get_Sixth_Section_Text);



//FINAL SECTION ANIMATION

const get_Final_Section_Text = document.querySelector(".final_text");

function final_Section_Animation(entries){
	entries.forEach( (entry) => {
		if(entry.isIntersecting){
			entry.target.classList.add("final_section_animation_class");
			observer.unobserve(entry.target);
		}
	});
	
	
	
}


const final_Section_Animation_Root = 
{
	root : null,
	rootMargin : "0px",
	threshold : 0.6,
	
}


const final_Section_Animation_API = new IntersectionObserver(final_Section_Animation, final_Section_Animation_Root);

final_Section_Animation_API.observe(get_Final_Section_Text);