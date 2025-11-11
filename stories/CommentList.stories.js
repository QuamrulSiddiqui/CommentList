import CommentList from './CommentList';

export default {
  title: 'Example/CommentList',
  component: CommentList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    comments: [
      {
        text: 'This is a great comment!',
        author: {
          name: 'John Doe',
          avatar: 'https://via.placeholder.com/48',
        },
      },
      {
        text: 'I love this feature!',
        author: {
          name: 'Jane Smith',
          avatar: 'https://via.placeholder.com/48',
        },
      },
      {
        text: 'Amazing work on this component.',
        author: {
          name: 'Bob Johnson',
          avatar: 'https://via.placeholder.com/48',
        },
      },
    ],
  },
};

export const Loading = {
  args: {
    loading: true,
  },
};

export const Empty = {
  args: {
    comments: [],
  },
};

export const SingleComment = {
  args: {
    comments: [
      {
        text: 'Just one comment here.',
        author: {
          name: 'Solo User',
          avatar: 'https://via.placeholder.com/48',
        },
      },
    ],
  },
};
