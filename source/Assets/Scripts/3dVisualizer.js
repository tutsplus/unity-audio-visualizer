#pragma strict

public var detail: int = 500;
public var minValue: float = 1.0;
public var amplitude: float = 0.1;

private var randomAmplitude: float = 1.0;
private var startScale: Vector3;

function Start()
{
	startScale = transform.localScale;
	
	randomAmplitude = Random.Range(1.0, 3.0);
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
	
	transform.localScale = new Vector3((packagedData * amplitude) + startScale.y, (packagedData * amplitude) + startScale.y, (packagedData * amplitude) + startScale.z);
}