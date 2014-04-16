#pragma strict

public var detail: int = 500;
public var amplitude: float = 0.1;
private var startPosition: float;

function Start()
{
	startPosition = transform.localPosition.y;
}

function Update() 
{
	var info: float[] = new float[detail];
	AudioListener.GetOutputData(info, 0); 
	var packagedData: float = 0.0;
	
	for(var x: int = 0; x < info.Length; x++)
	{
		packagedData += System.Math.Abs(info[x]);	
	}
	
	transform.localPosition.y = startPosition + packagedData * amplitude;
}