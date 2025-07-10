import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Heart, MessageCircle, Share } from 'lucide-react-native';
import { FeedPost as FeedPostType } from '@/types';
import { Colors } from '@/constants/Colors';
import { Layout } from '@/constants/Layout';
import { formatTimeAgo } from '@/utils/dateUtils';

interface FeedPostProps {
  post: FeedPostType;
}

export default function FeedPost({ post }: FeedPostProps) {
  const [liked, setLiked] = useState(post.likedBy.includes('current-user'));
  const [likesCount, setLikesCount] = useState(post.likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikesCount(prev => liked ? prev - 1 : prev + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: post.userAvatar }} style={styles.avatar} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{post.userName}</Text>
          <Text style={styles.tripName}>{post.tripName}</Text>
          <Text style={styles.timestamp}>{formatTimeAgo(post.createdAt)}</Text>
        </View>
      </View>

      <Text style={styles.caption}>{post.caption}</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imagesContainer}>
        {post.images.map((image, index) => (
          <Image key={index} source={{ uri: image }} style={styles.postImage} />
        ))}
      </ScrollView>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton} onPress={handleLike}>
          <Heart 
            size={24} 
            color={liked ? Colors.error : Colors.textSecondary} 
            fill={liked ? Colors.error : 'none'}
          />
          <Text style={[styles.actionText, liked && { color: Colors.error }]}>
            {likesCount}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <MessageCircle size={24} color={Colors.textSecondary} />
          <Text style={styles.actionText}>{post.comments.length}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Share size={24} color={Colors.textSecondary} />
        </TouchableOpacity>
      </View>

      {post.comments.length > 0 && (
        <View style={styles.commentsContainer}>
          {post.comments.slice(0, 2).map((comment) => (
            <View key={comment.id} style={styles.comment}>
              <Text style={styles.commentUser}>{comment.userName}</Text>
              <Text style={styles.commentText}>{comment.text}</Text>
            </View>
          ))}
          {post.comments.length > 2 && (
            <TouchableOpacity>
              <Text style={styles.viewMoreComments}>
                View all {post.comments.length} comments
              </Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginBottom: Layout.spacing.md,
    borderRadius: Layout.borderRadius.xl,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Layout.spacing.md,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: Layout.borderRadius.full,
    marginRight: Layout.spacing.md,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: Layout.fontSize.md,
    fontWeight: Layout.fontWeight.semibold,
    color: Colors.textPrimary,
  },
  tripName: {
    fontSize: Layout.fontSize.sm,
    color: Colors.primary,
    fontWeight: Layout.fontWeight.medium,
  },
  timestamp: {
    fontSize: Layout.fontSize.xs,
    color: Colors.textTertiary,
    marginTop: Layout.spacing.xs,
  },
  caption: {
    fontSize: Layout.fontSize.md,
    color: Colors.textPrimary,
    paddingHorizontal: Layout.spacing.md,
    marginBottom: Layout.spacing.md,
    lineHeight: 22,
  },
  imagesContainer: {
    marginBottom: Layout.spacing.md,
  },
  postImage: {
    width: 300,
    height: 300,
    marginLeft: Layout.spacing.md,
    borderRadius: Layout.borderRadius.lg,
  },
  actions: {
    flexDirection: 'row',
    paddingHorizontal: Layout.spacing.md,
    paddingBottom: Layout.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderLight,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: Layout.spacing.lg,
  },
  actionText: {
    fontSize: Layout.fontSize.sm,
    color: Colors.textSecondary,
    marginLeft: Layout.spacing.sm,
    fontWeight: Layout.fontWeight.medium,
  },
  commentsContainer: {
    padding: Layout.spacing.md,
  },
  comment: {
    flexDirection: 'row',
    marginBottom: Layout.spacing.sm,
  },
  commentUser: {
    fontSize: Layout.fontSize.sm,
    fontWeight: Layout.fontWeight.semibold,
    color: Colors.textPrimary,
    marginRight: Layout.spacing.sm,
  },
  commentText: {
    fontSize: Layout.fontSize.sm,
    color: Colors.textPrimary,
    flex: 1,
  },
  viewMoreComments: {
    fontSize: Layout.fontSize.sm,
    color: Colors.textTertiary,
    fontWeight: Layout.fontWeight.medium,
  },
});