/**
 * Mocking client-server processing
 */
const _workspaces = [
  {
    id: "bd2792ea-a168-4f91-9cdb-23e992dc840f",
    name: "J7 media",
    url: "https://j7media.stent.io",
    plan: "5-10 members monthly subscription",
    status: "active",
    users: [
      {
        displayName: "John Doe",
        id: "1234567890",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      {
        displayName: "Jack Doe",
        id: "1434567890",
        avatar:
          "https://i1.rgstatic.net/ii/profile.image/279850343518228-1443732929860_Q128/John_Doe400.jpg"
      }
    ]
  },
  {
    id: "325c4823-43c0-4e1c-a6c0-10ff43d03c34",
    name: "Bicom",
    url: "https://bicom.stent.io",
    plan: "Pay as you go",
    status: "active",
    users: [
      {
        displayName: "Jack Bear",
        id: "1234567890"
      }
    ]
  },
  {
    id: "03103939-b99f-4244-aecf-c22068585166",
    name: "Cosoltec",
    url: "https://cosoltec.stent.io",
    plan: "5-10 members yearly subscription",
    status: "suspended",
    users: [
      {
        displayName: "Jane Doe",
        id: "1234567890",
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4ACwUdDsswtlSVRTbl-qZos0RtxH6hyjMmg&usqp=CAU"
      }
    ]
  }
];

export default {
  getWorkspaces() {
    return new Promise(res => setTimeout(() => res(_workspaces)), 1000);
  },
  getWorkspaceById(id) {
    return new Promise(
      res => setTimeout(() => res(_workspaces.find(w => w.id === id))),
      1000
    );
  }
};
