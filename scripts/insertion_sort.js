function Insertion(){
    //Setting Time Complexities
    document.getElementById("Time_Worst").innerHTML=`O(N<sup>2</sup>)`;
    document.getElementById("Time_Average").innerHTML=`Θ(N<sup>2</sup>)`;
    document.getElementById("Time_Best").innerText="Ω(N)";

    //Setting Space Complexity
    document.getElementById("Space_Worst").innerText="O(1)";

    c_delay=0;

    for(var i=0;i<array_size;i++)
    {
        div_update(divs[i],div_sizes[i],"yellow"); //color update

        var key=div_sizes[i];
        var j=i-1;

        while(j>=0 &&div_sizes[j]>key)
        {
            div_update(divs[j],div_sizes[j],"red"); //color update
            div_update(divs[j+1],div_sizes[j+1],"red");//color update

            div_sizes[j+1]=div_sizes[j];

            div_update(divs[j],div_sizes[j],"red");//height update
            div_update(divs[j+1],div_sizes[j+1],"red"); //height update

            div_update(divs[j],div_sizes[j],"yellow"); //color update

            if(j==(i-1))
            {
                div_update(divs[j+1],div_sizes[j+1],"yellow"); //color update
            }

            else
            {
               div_update(divs[j+1],div_sizes[j+1],"blue"); //color update
            }
            j-=1;
        }

        div_sizes[j+1]=key;

        for(var t=0;t<i;t++)
        {
            div_update(divs[t],div_sizes[t],"green");//color update
        }
    }
    div_update(divs[i-1],div_sizes[i-1],"green"); //color update

    enable_buttons();
}