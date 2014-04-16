#pragma strict

private var soundOn: boolean = false;

function Start()
{
	audio.volume = 0.0;
}

function OnGUI()
{
	if(!soundOn)
	{
		if(GUI.Button(Rect(10,10,200,50), "Activate"))
		{
			audio.volume = 1.0;
			soundOn = true;
		}
	}
	else
	{
		if(GUI.Button(Rect(10,10,200,50), "Deactivate"))
		{
			audio.volume = 0.0;
			soundOn = false;
		}
	}
	
	GUI.Box(Rect(10,70,200,50), "Music by Maverlyn Darkstar");
}