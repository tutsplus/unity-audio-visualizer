#pragma strict

var speed: float = 15.0;

function Update()
{
	transform.Rotate(0, speed * Time.deltaTime, 0);
}