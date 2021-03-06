# Build Tasks

You can create, list, upload and delete build tasks with tfx.

[![Managing VSO Tasks](http://img.youtube.com/vi/u_4ZJcEE3S4/0.jpg)](https://youtu.be/u_4ZJcEE3S4 "Managing VSO Build Tasks")

[Video Link](https://youtu.be/u_4ZJcEE3S4)

## Permissions
You need to be in the top level Agent Pool Administrators group to manipulate tasks
[See here](https://msdn.microsoft.com/Library/vs/alm/Build/agents/admin)

Account admins can add users to that group

## Create

Creates a templated task ready for you to start editing

```bash
~$ tfx build tasks create
Copyright Microsoft Corporation

Enter short name > sample
Enter friendly name > Sample Task
Enter description > Sample Task for Docs
Enter author > Me

created task @ /Users/bryanmac/sample
id   : 305898e0-3eba-11e5-af7a-1181c3c6c966
name: sample

A temporary task icon was created.  Replace with a 32x32 png with transparencies

~$ ls ./sample
icon.png    sample.js   sample.ps1  task.json
```

## Upload

You can upload a task by specifying the directory (fully qualified or relative) which has the files.

As an example we can upload the Octopus Deploy custom task.  

```bash
~$ git clone https://github.com/OctopusDeploy/OctoTFS
Cloning into 'OctoTFS'...
Checking connectivity... done.

~$ cd OctoTFS/source/CustomBuildSteps
```

It's task is in the 

```bash
~$ tfx build tasks upload ./CreateOctopusRelease
```

## List

To list the tasks that are on the server ...

```bash
~$ tfx build tasks list

...

id   : 4e131b60-5532-4362-95b6-7c67d9841b4f
name : OctopusCreateRelease
friendly name : Create Octopus Release
visibility: Build,Release
description: Create a Release in Octopus Deploy
version: 0.1.2

```

## Delete

You can delete a task by supplying the id.  Use list above to get the id
As an example, this would delete the Octopus task we uploaded above

Of course, be cautious deleting tasks.

```bash
~/$ tfx build tasks delete 4e131b60-5532-4362-95b6-7c67d9841b4f
Copyright Microsoft Corporation

task: 4e131b60-5532-4362-95b6-7c67d9841b4f deleted successfully!
```

